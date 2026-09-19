import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/iw6xa6bfm.css';
import '../../css/o/og_tsc9qs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="iw6xa6bfm"/><path class="og_tsc9qs"/></g>`,
		"fallback": "glyphs:volume-mute",
	});
}

export default Component;
