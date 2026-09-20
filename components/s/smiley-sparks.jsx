import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u-1pftcsp.css';
import '../../css/i/i-i97hbkm.css';
import '../../css/g/g9b9hnbpq.css';
import '../../css/o/o0cyujb8t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="u-1pftcsp"/><path class="i-i97hbkm"/><path class="g9b9hnbpq"/><path class="o0cyujb8t"/></g>`,
		"fallback": "streamline-color:smiley-sparks",
	});
}

export default Component;
