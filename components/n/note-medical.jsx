import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j6hlmh-yv.css';
import '../../css/b/bxpvs5bwt.css';
import '../../css/y/ylpji7cqa.css';
import '../../css/m/m-r32nl1u.css';
import '../../css/o/o54ffy1qd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j6hlmh-yv"/><path class="bxpvs5bwt"/><rect class="ylpji7cqa"/><rect class="m-r32nl1u"/><path clip-rule="evenodd" class="o54ffy1qd"/></g>`,
		"fallback": "glyphs-poly:note-medical",
	});
}

export default Component;
