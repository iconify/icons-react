import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qqt1bybxr.css';
import '../../css/p/p6va2jbdp.css';
import '../../css/h/htfz8x6gt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="qqt1bybxr"/><path clip-rule="evenodd" class="p6va2jbdp"/><path class="htfz8x6gt"/></g>`,
		"fallback": "glyphs-poly:speaker",
	});
}

export default Component;
