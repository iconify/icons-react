import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guysevb9p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guysevb9p"/>`,
		"fallback": "selfhst:tooljet-dark",
	});
}

export default Component;
