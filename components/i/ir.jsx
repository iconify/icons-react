import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n0fj7sbda.css';
import '../../css/t/tqk20nppu.css';
import '../../css/m/myjrtya-z.css';
import '../../css/e/e_--q9b_j.css';
import '../../css/e/e__f_8btd.css';
import '../../css/i/i6rk8jbrv.css';
import '../../css/r/ra_lalblk.css';

const viewBox = {"width":300,"height":173};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="n0fj7sbda"/><path class="tqk20nppu"/><path class="myjrtya-z"/><path class="e_--q9b_j"/><path class="e__f_8btd"/><path class="i6rk8jbrv"/><path class="ra_lalblk"/></g>`,
		"fallback": "cif:ir",
	});
}

export default Component;
