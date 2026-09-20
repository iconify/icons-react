import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpn187_zl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpn187_zl"/>`,
		"fallback": "selfhst:shopify-light",
	});
}

export default Component;
