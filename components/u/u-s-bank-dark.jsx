import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g45c17bnc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g45c17bnc"/>`,
		"fallback": "selfhst:u-s-bank-dark",
	});
}

export default Component;
