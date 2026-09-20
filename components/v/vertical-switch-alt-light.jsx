import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as0b5j_bf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as0b5j_bf"/>`,
		"fallback": "lets-icons:vertical-switch-alt-light",
	});
}

export default Component;
