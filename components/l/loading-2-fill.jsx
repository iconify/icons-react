import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz_wa7byo.css';
import '../../css/f/fhlupx00x.css';
import '../../css/k/ka7tfjekq.css';
import '../../css/e/eryeldb2m.css';
import '../../css/h/hz9x32b5t.css';
import '../../css/i/ivdvkcmlb.css';
import '../../css/u/ut1eg1q1g.css';
import '../../css/p/pflx05bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz_wa7byo"/><path class="fhlupx00x"/><path class="ka7tfjekq"/><path class="eryeldb2m"/><path class="hz9x32b5t"/><path class="ivdvkcmlb"/><path class="ut1eg1q1g"/><path class="pflx05bzn"/>`,
		"fallback": "mingcute:loading-2-fill",
	});
}

export default Component;
