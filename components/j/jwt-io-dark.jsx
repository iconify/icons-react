import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_wt6fb2y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_wt6fb2y"/>`,
		"fallback": "selfhst:jwt-io-dark",
	});
}

export default Component;
