import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2umeba-b.css';
import '../../css/i/it6zx1v7j.css';
import '../../css/y/y295kubtu.css';
import '../../css/e/er6ve5n2i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2umeba-b"/><path clip-rule="evenodd" class="it6zx1v7j"/><path class="y295kubtu"/><path class="er6ve5n2i"/></g>`,
		"fallback": "streamline-color:petri-dish-lab-equipment",
	});
}

export default Component;
