import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obzksubap.css';
import '../../css/q/qe-pw2bkw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="obzksubap"/><path class="qe-pw2bkw"/></g>`,
		"fallback": "glyphs-poly:record",
	});
}

export default Component;
