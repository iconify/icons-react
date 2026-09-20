import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqr3-dvvn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqr3-dvvn"/>`,
		"fallback": "selfhst:raindrop-io-dark",
	});
}

export default Component;
