import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqo-pdbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqo-pdbjs"/>`,
		"fallback": "griddy-icons:sale-alt-filled",
	});
}

export default Component;
