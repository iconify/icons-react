import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcf0u5b1y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcf0u5b1y"/>`,
		"fallback": "selfhst:socket-io-dark",
	});
}

export default Component;
