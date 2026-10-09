import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0kzgmg_q.css';
import '../../css/o/o4zy8hb1t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0kzgmg_q"/><path class="o4zy8hb1t"/>`,
		"fallback": "energy-icons:map-pin-20-bold",
	});
}

export default Component;
