import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kzk-ulb7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kzk-ulb7x"/>`,
		"fallback": "selfhst:shopify-dark",
	});
}

export default Component;
