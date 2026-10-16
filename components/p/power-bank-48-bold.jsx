import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5qj0td2j.css';
import '../../css/v/vyrx1cnfi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5qj0td2j"/><path class="vyrx1cnfi"/>`,
		"fallback": "energy-icons:power-bank-48-bold",
	});
}

export default Component;
