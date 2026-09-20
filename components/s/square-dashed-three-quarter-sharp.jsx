import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kyw3f2bpx.css';
import '../../css/o/ovt7tgj1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kyw3f2bpx"/><path class="ovt7tgj1w"/></g>`,
		"fallback": "keyline-icons:square-dashed-three-quarter-sharp",
	});
}

export default Component;
