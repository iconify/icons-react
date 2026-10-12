import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ew_pm7bud.css';
import '../../css/c/c5mar1biz.css';
import '../../css/g/g48c9l9px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ew_pm7bud"/><path class="c5mar1biz"/><path class="g48c9l9px"/></g>`,
		"fallback": "lucide-extended:receipt-duotone",
	});
}

export default Component;
