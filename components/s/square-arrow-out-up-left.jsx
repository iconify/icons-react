import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sicu9ob1k.css';
import '../../css/e/e70md1bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sicu9ob1k"/><path class="e70md1bed"/></g>`,
		"fallback": "hugeicons:square-arrow-out-up-left",
	});
}

export default Component;
