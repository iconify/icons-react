import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0dz0lbab.css';
import '../../css/x/x7prasd5k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0dz0lbab"/><path class="x7prasd5k"/>`,
		"fallback": "selfhst:rauthy-light",
	});
}

export default Component;
