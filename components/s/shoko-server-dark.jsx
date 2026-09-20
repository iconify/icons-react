import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3-y7_b1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3-y7_b1w"/>`,
		"fallback": "selfhst:shoko-server-dark",
	});
}

export default Component;
