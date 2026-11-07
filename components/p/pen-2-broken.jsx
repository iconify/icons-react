import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mofiw1b9k.css';
import '../../css/g/gvldug-tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mofiw1b9k"/><path class="gvldug-tk"/></g>`,
		"fallback": "solar:pen-2-broken",
	});
}

export default Component;
