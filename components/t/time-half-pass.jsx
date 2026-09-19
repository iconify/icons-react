import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/avo-_rbdv.css';
import '../../css/v/vvm_1sbqe.css';
import '../../css/z/znqljt_fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="avo-_rbdv"/><path class="vvm_1sbqe"/><path class="znqljt_fj"/></g>`,
		"fallback": "hugeicons:time-half-pass",
	});
}

export default Component;
