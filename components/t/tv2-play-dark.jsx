import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aljiy_w3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aljiy_w3h"/>`,
		"fallback": "selfhst:tv2-play-dark",
	});
}

export default Component;
