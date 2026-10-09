import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwlek8bjm.css';
import '../../css/o/onp3hbbtd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwlek8bjm"/><path class="onp3hbbtd"/>`,
		"fallback": "energy-icons:italic-48",
	});
}

export default Component;
