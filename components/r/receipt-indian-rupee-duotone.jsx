import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5mar1biz.css';
import '../../css/g/g48c9l9px.css';
import '../../css/o/obgcfhb8g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c5mar1biz"/><path class="g48c9l9px"/><path class="obgcfhb8g"/></g>`,
		"fallback": "lucide-extended:receipt-indian-rupee-duotone",
	});
}

export default Component;
