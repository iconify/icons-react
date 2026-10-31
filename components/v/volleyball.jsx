import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/b/bvp8mtbbf.css';
import '../../css/t/tsdpfebfb.css';
import '../../css/i/ic7514b5i.css';
import '../../css/r/reyyv_bhx.css';
import '../../css/k/ksfu4rfpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="bvp8mtbbf"/><path class="tsdpfebfb"/><path class="ic7514b5i"/><path class="reyyv_bhx"/><path class="ksfu4rfpx"/></g>`,
		"fallback": "withicons-retro:volleyball",
	});
}

export default Component;
