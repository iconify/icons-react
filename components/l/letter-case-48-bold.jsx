import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuumlzbuz.css';
import '../../css/s/so4buhb_x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuumlzbuz"/><path class="so4buhb_x"/>`,
		"fallback": "energy-icons:letter-case-48-bold",
	});
}

export default Component;
