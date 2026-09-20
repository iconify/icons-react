import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmxn7fbeh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmxn7fbeh"/>`,
		"fallback": "selfhst:kitchenowl-dark",
	});
}

export default Component;
