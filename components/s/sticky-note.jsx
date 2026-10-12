import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzrshnbal.css';
import '../../css/u/ud7n-by6k.css';
import '../../css/k/k8c68e47n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uzrshnbal"/><path class="ud7n-by6k"/><path class="k8c68e47n"/></g>`,
		"fallback": "andrsrxn:sticky-note",
	});
}

export default Component;
