import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3qomhb2x.css';
import '../../css/a/a6yl8qvjm.css';
import '../../css/k/k910eabre.css';
import '../../css/s/s63co7bgz.css';
import '../../css/q/qknj5-6ms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k3qomhb2x"/><path class="a6yl8qvjm"/><path class="k910eabre"/><path class="s63co7bgz"/><path class="qknj5-6ms"/></g>`,
		"fallback": "andrsrxn:soap-dispenser",
	});
}

export default Component;
