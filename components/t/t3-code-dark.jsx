import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guq7mxbib.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guq7mxbib"/>`,
		"fallback": "selfhst:t3-code-dark",
	});
}

export default Component;
