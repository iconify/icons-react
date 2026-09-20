import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk0phibge.css';
import '../../css/e/e95vgl-bz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk0phibge"/><path class="e95vgl-bz"/>`,
		"fallback": "selfhst:synclyrics-dark",
	});
}

export default Component;
