import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxs7g9ljm.css';

const viewBox = {"width":463,"height":463};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxs7g9ljm"/>`,
		"fallback": "thesvg:openfga",
	});
}

export default Component;
