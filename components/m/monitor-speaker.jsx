import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yc2e94s8x.css';
import '../../css/k/koc_erasu.css';
import '../../css/p/pr_sh2lqz.css';
import '../../css/u/uxwj_xb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yc2e94s8x"/><rect class="koc_erasu"/><path class="pr_sh2lqz"/><circle class="uxwj_xb5y"/></g>`,
		"fallback": "lucide:monitor-speaker",
	});
}

export default Component;
