import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kv45gzbce.css';
import '../../css/q/qh4w5dbmy.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="kv45gzbce"/><path class="qh4w5dbmy"/></g>`,
		"fallback": "skill-icons:photoshop",
	});
}

export default Component;
