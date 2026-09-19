import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/pfj0yebbz.css';
import '../../css/c/cs1jengnq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="pfj0yebbz"/><path class="cs1jengnq"/></g>`,
		"fallback": "glyphs:tools",
	});
}

export default Component;
