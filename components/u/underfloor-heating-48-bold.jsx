import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cya2q_icv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cya2q_icv"/>`,
		"fallback": "energy-icons:underfloor-heating-48-bold",
	});
}

export default Component;
