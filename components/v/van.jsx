import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/slvoj-cue.css';
import '../../css/d/dppdijifu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="slvoj-cue"/><path class="dppdijifu"/></g>`,
		"fallback": "glyphs:van",
	});
}

export default Component;
