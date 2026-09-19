import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/xl304valp.css';
import '../../css/u/u49cy0poo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="xl304valp"/><path class="u49cy0poo"/></g>`,
		"fallback": "glyphs:microphone-2",
	});
}

export default Component;
