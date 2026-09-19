import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/ieafnjwsq.css';
import '../../css/t/t7ttk7b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ieafnjwsq"/><path class="t7ttk7b7h"/></g>`,
		"fallback": "hugeicons:layout-list",
	});
}

export default Component;
