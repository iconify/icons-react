import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdxwtybrp.css';
import '../../css/z/zg0sxcbun.css';
import '../../css/n/nn59byzyh.css';
import '../../css/u/uwmz0mb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdxwtybrp wm-k"/><path class="wm-k zg0sxcbun"/><path class="nn59byzyh wm-k"/><path class="uwmz0mb7b wm-shine"/></g>`,
		"fallback": "withicons-anime:phone",
	});
}

export default Component;
