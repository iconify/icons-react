import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihmii9b0s.css';
import '../../css/s/shk-1412s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihmii9b0s"/><path class="shk-1412s"/>`,
		"fallback": "energy-icons:ruins-48-bold",
	});
}

export default Component;
