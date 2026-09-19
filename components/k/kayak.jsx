import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gonywoyoi.css';
import '../../css/t/tnoa5029l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gonywoyoi"/><path class="tnoa5029l"/></g>`,
		"fallback": "glyphs:kayak",
	});
}

export default Component;
