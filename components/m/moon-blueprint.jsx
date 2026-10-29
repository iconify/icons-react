import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gbfj4eb-n.css';
import '../../css/o/otfr25bmf.css';
import '../../css/p/pad0p8bhg.css';
import '../../css/w/wt9elgabp.css';
import '../../css/z/z29ur_b7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gbfj4eb-n wm-deco"/><path class="otfr25bmf wm-deco"/><path class="pad0p8bhg wm-deco"/><path class="wt9elgabp"/><path class="z29ur_b7y"/></g>`,
		"fallback": "withicons:moon-blueprint",
	});
}

export default Component;
