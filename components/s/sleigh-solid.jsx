import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kiplmf6yd.css';
import '../../css/x/xi_vsmm3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kiplmf6yd"/><path class="wm-a xi_vsmm3v"/></g>`,
		"fallback": "withicons:sleigh-solid",
	});
}

export default Component;
