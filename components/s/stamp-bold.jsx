import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rbw0rrbrh.css';
import '../../css/d/dt1o5lyez.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rbw0rrbrh"/><path class="dt1o5lyez"/></g>`,
		"fallback": "glyphs:stamp-bold",
	});
}

export default Component;
