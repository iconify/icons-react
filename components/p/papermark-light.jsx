import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qy0i9f5du.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qy0i9f5du"/>`,
		"fallback": "selfhst:papermark-light",
	});
}

export default Component;
