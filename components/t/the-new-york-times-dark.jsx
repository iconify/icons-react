import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxs8qs1ej.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxs8qs1ej"/>`,
		"fallback": "selfhst:the-new-york-times-dark",
	});
}

export default Component;
