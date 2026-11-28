import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztt3ahbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztt3ahbap"/>`,
		"fallback": "noviair:wallet-x",
	});
}

export default Component;
