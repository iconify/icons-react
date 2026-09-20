import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkj5pkqok.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkj5pkqok"/>`,
		"fallback": "selfhst:signature-pdf-dark",
	});
}

export default Component;
