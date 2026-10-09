import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmxox-big.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmxox-big"/>`,
		"fallback": "energy-icons:percent-48",
	});
}

export default Component;
