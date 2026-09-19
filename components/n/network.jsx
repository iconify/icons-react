import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/u/ugw1omula.css';
import '../../css/x/xjh3njbok.css';
import '../../css/m/m5wsf8blc.css';
import '../../css/k/kzo_q-bzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="ugw1omula"/><circle class="xjh3njbok"/><circle class="m5wsf8blc"/><path class="kzo_q-bzb"/></g>`,
		"fallback": "akar-icons:network",
	});
}

export default Component;
