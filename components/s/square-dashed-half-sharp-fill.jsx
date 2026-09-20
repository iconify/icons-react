import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kyw3f2bpx.css';
import '../../css/g/guiv08l1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kyw3f2bpx"/><path class="guiv08l1p"/></g>`,
		"fallback": "keyline-icons:square-dashed-half-sharp-fill",
	});
}

export default Component;
