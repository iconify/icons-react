import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6_diewni.css';
import '../../css/s/s2uksm1sb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6_diewni"/><path class="s2uksm1sb"/>`,
		"fallback": "energy-icons:pen-sparkle-48-bold",
	});
}

export default Component;
