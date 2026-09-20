import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/tkr10zdrd.css';
import '../../css/g/gt_8fgbpa.css';
import '../../css/z/zyf0_gbnw.css';
import '../../css/v/vh4a3ccch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="tkr10zdrd"/><path class="gt_8fgbpa"/><path class="zyf0_gbnw"/><path class="vh4a3ccch"/></g>`,
		"fallback": "streamline-freehand:modern-payment-wireless-smartphone",
	});
}

export default Component;
