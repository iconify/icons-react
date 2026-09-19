import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nn5mlkxwd.css';
import '../../css/j/jt9uwcc7h.css';
import '../../css/o/oolf1cc2n.css';
import '../../css/k/kmx1f_7vl.css';
import '../../css/c/c2riqyb9o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nn5mlkxwd"/><path class="jt9uwcc7h"/><path class="oolf1cc2n"/><path class="kmx1f_7vl"/><path class="c2riqyb9o"/></g>`,
		"fallback": "glyphs-poly:sunset-1",
	});
}

export default Component;
