import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fp00jbqxq.css';
import '../../css/h/hv6qxib8v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fp00jbqxq"/><path class="hv6qxib8v"/></g>`,
		"fallback": "glyphs-poly:stop-sign",
	});
}

export default Component;
