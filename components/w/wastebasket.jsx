import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxzynr6iy.css';
import '../../css/v/vfkmw1b0c.css';
import '../../css/q/qfouvhbrb.css';
import '../../css/t/to5_hpm1w.css';
import '../../css/v/v6_khrb6d.css';
import '../../css/a/ab0amybml.css';
import '../../css/j/jmtmopvfi.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxzynr6iy"/><path class="vfkmw1b0c"/><path class="qfouvhbrb"/><g class="to5_hpm1w"><path class="v6_khrb6d"/><path class="ab0amybml"/><path class="jmtmopvfi"/></g>`,
		"fallback": "openmoji:wastebasket",
	});
}

export default Component;
