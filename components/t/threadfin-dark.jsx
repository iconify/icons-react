import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqdnidbra.css';
import '../../css/p/ps2d02mlf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqdnidbra"/><path class="ps2d02mlf"/>`,
		"fallback": "selfhst:threadfin-dark",
	});
}

export default Component;
