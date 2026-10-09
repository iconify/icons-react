import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-7-2mbbf.css';
import '../../css/o/o76p7lbzo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-7-2mbbf"/><path class="o76p7lbzo"/>`,
		"fallback": "energy-icons:ticket-48-bold",
	});
}

export default Component;
