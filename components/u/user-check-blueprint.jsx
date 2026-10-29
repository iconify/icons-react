import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l2rk8jw5q.css';
import '../../css/r/rm9gvi60a.css';
import '../../css/h/hwoh2g1ry.css';
import '../../css/u/uwldxv39u.css';
import '../../css/e/eup2bcbfo.css';
import '../../css/e/ecxhesbwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="l2rk8jw5q wm-deco"/><path class="rm9gvi60a wm-deco"/><path class="hwoh2g1ry wm-deco"/><path class="uwldxv39u wm-k"/><path class="eup2bcbfo wm-s"/><path class="ecxhesbwt wm-k"/></g>`,
		"fallback": "withicons:user-check-blueprint",
	});
}

export default Component;
