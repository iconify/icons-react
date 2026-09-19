import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/orbjh-bde.css';
import '../../css/p/p2k07nq4l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="orbjh-bde"/><path class="p2k07nq4l"/></g>`,
		"fallback": "glyphs:ruler-combined",
	});
}

export default Component;
