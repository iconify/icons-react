import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mniji4bqm.css';
import '../../css/f/f-lkdvbsq.css';
import '../../css/p/pp8fnwd4k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mniji4bqm"/><path class="f-lkdvbsq"/><path clip-rule="evenodd" class="pp8fnwd4k"/></g>`,
		"fallback": "glyphs-poly:moon",
	});
}

export default Component;
