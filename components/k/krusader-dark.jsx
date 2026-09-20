import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi3ie_b3b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi3ie_b3b"/>`,
		"fallback": "selfhst:krusader-dark",
	});
}

export default Component;
