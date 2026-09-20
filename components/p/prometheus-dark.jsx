import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc1qq-8ro.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc1qq-8ro"/>`,
		"fallback": "selfhst:prometheus-dark",
	});
}

export default Component;
