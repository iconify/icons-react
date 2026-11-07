import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/emg-pk9hg.css';
import '../../css/q/qlvg9o9nq.css';
import '../../css/w/w1z2onnqz.css';
import '../../css/q/q6y5l5b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="emg-pk9hg"/><path class="qlvg9o9nq"/><path class="w1z2onnqz"/><path class="q6y5l5b-j"/></g>`,
		"fallback": "solar:move-3d-line-duotone",
	});
}

export default Component;
