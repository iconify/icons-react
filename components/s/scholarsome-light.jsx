import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxq2fbs4g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxq2fbs4g"/>`,
		"fallback": "selfhst:scholarsome-light",
	});
}

export default Component;
