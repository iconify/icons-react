import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uayzpq5gn.css';
import '../../css/h/hokpvi8xa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uayzpq5gn"/><path class="hokpvi8xa"/>`,
		"fallback": "energy-icons:jersey-48-bold",
	});
}

export default Component;
