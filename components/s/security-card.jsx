import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vk5gw_r8i.css';
import '../../css/v/vqvyaqdbj.css';
import '../../css/t/tpp0pbuxr.css';
import '../../css/g/guxqo8m1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vk5gw_r8i"/><path class="vqvyaqdbj"/><path class="tpp0pbuxr"/><path class="guxqo8m1z"/></g>`,
		"fallback": "reicon:security-card",
	});
}

export default Component;
