import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01eto0we.css';
import '../../css/w/wlja3wbcz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h01eto0we"/><path class="wlja3wbcz"/>`,
		"fallback": "energy-icons:square-check-48",
	});
}

export default Component;
