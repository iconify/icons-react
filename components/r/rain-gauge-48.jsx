import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzojfwbzi.css';
import '../../css/x/xym1wwbma.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzojfwbzi"/><path class="xym1wwbma"/>`,
		"fallback": "energy-icons:rain-gauge-48",
	});
}

export default Component;
