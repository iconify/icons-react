import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/o3c0473sv.css';
import '../../css/x/xuuhzvbpt.css';
import '../../css/t/t0383xejc.css';
import '../../css/b/bx0wdaclv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="o3c0473sv wm-deco"/><path class="wm-deco xuuhzvbpt"/><path class="t0383xejc wm-k"/><path class="bx0wdaclv wm-a"/></g>`,
		"fallback": "withicons:skip-back-blueprint",
	});
}

export default Component;
