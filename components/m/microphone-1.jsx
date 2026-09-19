import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/u-rfnjbyv.css';
import '../../css/h/h0qsq9bgj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="u-rfnjbyv"/><path class="h0qsq9bgj"/></g>`,
		"fallback": "glyphs:microphone-1",
	});
}

export default Component;
