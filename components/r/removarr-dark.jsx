import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao-jy9bsf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ao-jy9bsf"/>`,
		"fallback": "selfhst:removarr-dark",
	});
}

export default Component;
