import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd6fc7nov.css';
import '../../css/m/mxvx73bzm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd6fc7nov"/><path class="mxvx73bzm"/>`,
		"fallback": "energy-icons:video-off-48",
	});
}

export default Component;
