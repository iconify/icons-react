import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tbdb0_b1z.css';
import '../../css/b/byun9ebyr.css';
import '../../css/v/vt-vg_b-u.css';
import '../../css/b/bjs1nx4cv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tbdb0_b1z"/><path clip-rule="evenodd" class="byun9ebyr"/><path clip-rule="evenodd" class="vt-vg_b-u"/><path class="bjs1nx4cv"/></g>`,
		"fallback": "glyphs-poly:queen",
	});
}

export default Component;
