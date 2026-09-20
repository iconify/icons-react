import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw1ejmbbm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw1ejmbbm"/>`,
		"fallback": "selfhst:omnipoly-dark",
	});
}

export default Component;
