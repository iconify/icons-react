import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4t4q-ade.css';
import '../../css/k/kc8nueq9m.css';
import '../../css/a/ai4c3ehnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c4t4q-ade"/><rect class="kc8nueq9m"/><path class="ai4c3ehnh"/></g>`,
		"fallback": "andrsrxn:lock-scan",
	});
}

export default Component;
