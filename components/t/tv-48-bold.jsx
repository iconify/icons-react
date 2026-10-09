import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw937uq7x.css';
import '../../css/h/h8hd6s8wt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw937uq7x"/><path class="h8hd6s8wt"/>`,
		"fallback": "energy-icons:tv-48-bold",
	});
}

export default Component;
