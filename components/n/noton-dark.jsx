import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtymrw8dc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtymrw8dc"/>`,
		"fallback": "selfhst:noton-dark",
	});
}

export default Component;
