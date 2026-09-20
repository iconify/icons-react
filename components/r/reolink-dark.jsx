import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy6h1cb9g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy6h1cb9g"/>`,
		"fallback": "selfhst:reolink-dark",
	});
}

export default Component;
