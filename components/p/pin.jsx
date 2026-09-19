import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wr7o_k_0x.css';
import '../../css/g/ggoluzbtq.css';
import '../../css/n/nv0qqmb2k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wr7o_k_0x"/><path clip-rule="evenodd" class="ggoluzbtq"/><path class="nv0qqmb2k"/></g>`,
		"fallback": "glyphs-poly:pin",
	});
}

export default Component;
