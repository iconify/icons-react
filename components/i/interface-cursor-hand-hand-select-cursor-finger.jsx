import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_o92is6v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_o92is6v"/>`,
		"fallback": "streamline:interface-cursor-hand-hand-select-cursor-finger",
	});
}

export default Component;
