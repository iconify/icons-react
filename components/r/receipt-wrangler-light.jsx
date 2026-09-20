import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zydp2p7fp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zydp2p7fp"/>`,
		"fallback": "selfhst:receipt-wrangler-light",
	});
}

export default Component;
