import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c05wbm_mv.css';
import '../../css/d/d2q5xe_6h.css';
import '../../css/a/aai6gobxk.css';
import '../../css/o/okrmxubng.css';
import '../../css/f/ft95uqb0u.css';
import '../../css/w/wauzm0doo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c05wbm_mv"/><path class="d2q5xe_6h"/><path class="aai6gobxk"/><path class="okrmxubng"/><path class="ft95uqb0u"/><path class="wauzm0doo"/></g>`,
		"fallback": "solar:ruler-line-duotone",
	});
}

export default Component;
