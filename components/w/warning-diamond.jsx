import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qiivxj9lp.css';
import '../../css/q/q9eiwjq2m.css';
import '../../css/k/k3tgldn6z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qiivxj9lp"/><path class="q9eiwjq2m"/><path class="k3tgldn6z"/></g>`,
		"fallback": "andrsrxn:warning-diamond",
	});
}

export default Component;
