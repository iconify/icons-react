import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngehmsigm.css';
import '../../css/k/k44e6hbrh.css';
import '../../css/x/x2xhq2bdm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="ngehmsigm"/><path clip-rule="evenodd" class="k44e6hbrh"/><path class="x2xhq2bdm"/></g>`,
		"fallback": "pepicons:leave-print",
	});
}

export default Component;
