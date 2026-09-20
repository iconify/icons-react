import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw_wwlb9z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw_wwlb9z"/>`,
		"fallback": "selfhst:moodle-dark",
	});
}

export default Component;
