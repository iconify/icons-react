import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kyw3f2bpx.css';
import '../../css/l/ljt96p77g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kyw3f2bpx"/><path class="ljt96p77g"/></g>`,
		"fallback": "keyline-icons:square-dashed-quarter-sharp-fill",
	});
}

export default Component;
