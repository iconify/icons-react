import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1mdf92vw.css';
import '../../css/d/dvo8x3sla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1mdf92vw"/><path class="dvo8x3sla"/>`,
		"fallback": "energy-icons:scanner-48",
	});
}

export default Component;
