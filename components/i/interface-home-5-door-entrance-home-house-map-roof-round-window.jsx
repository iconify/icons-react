import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uenfb1boi.css';
import '../../css/z/zhzbkdbey.css';
import '../../css/a/a2--86u4z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="uenfb1boi"/><path class="zhzbkdbey"/><circle class="a2--86u4z"/></g>`,
		"fallback": "streamline:interface-home-5-door-entrance-home-house-map-roof-round-window",
	});
}

export default Component;
