import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q9fh_bcid.css';
import '../../css/r/r1lwaui8b.css';
import '../../css/o/o_k6lcc5g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q9fh_bcid"/><path class="r1lwaui8b"/><path class="o_k6lcc5g"/></g>`,
		"fallback": "glyphs:playback-speed",
	});
}

export default Component;
