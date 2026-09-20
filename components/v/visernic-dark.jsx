import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpxmj1fbq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpxmj1fbq"/>`,
		"fallback": "selfhst:visernic-dark",
	});
}

export default Component;
