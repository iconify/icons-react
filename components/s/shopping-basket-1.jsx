import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lse_kqbin.css';
import '../../css/u/uz92wn55v.css';
import '../../css/t/tf-jbaccj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lse_kqbin"/><path class="uz92wn55v"/><path class="tf-jbaccj"/></g>`,
		"fallback": "streamline-color:shopping-basket-1",
	});
}

export default Component;
