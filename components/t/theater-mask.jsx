import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pvuthvk9s.css';
import '../../css/p/ps176bbqh.css';
import '../../css/f/f-q5zsbhj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pvuthvk9s"/><path class="ps176bbqh"/><path class="f-q5zsbhj"/></g>`,
		"fallback": "streamline-flex:theater-mask",
	});
}

export default Component;
