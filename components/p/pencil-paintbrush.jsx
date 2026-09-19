import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d8pjg7bod.css';
import '../../css/w/wvg4ugbho.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="d8pjg7bod"/><path class="wvg4ugbho"/></g>`,
		"fallback": "glyphs:pencil-paintbrush",
	});
}

export default Component;
