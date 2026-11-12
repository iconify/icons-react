import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqs10by8y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqs10by8y"/>`,
		"fallback": "selfhst:matomo-dark",
	});
}

export default Component;
