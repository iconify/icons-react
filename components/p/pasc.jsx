import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t2tlzbbqd.css';
import '../../css/t/tmf4nf03x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="t2tlzbbqd"/><path class="tmf4nf03x"/></g>`,
		"fallback": "cryptocurrency-color:pasc",
	});
}

export default Component;
