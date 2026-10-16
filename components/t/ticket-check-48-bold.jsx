import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-7-2mbbf.css';
import '../../css/l/lp5-n4bth.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-7-2mbbf"/><path class="lp5-n4bth"/>`,
		"fallback": "energy-icons:ticket-check-48-bold",
	});
}

export default Component;
