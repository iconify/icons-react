import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkix5db5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkix5db5t"/>`,
		"fallback": "selfhst:microsoft-store-dark",
	});
}

export default Component;
