import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9cwzmv4u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9cwzmv4u"/>`,
		"fallback": "selfhst:pango-dark",
	});
}

export default Component;
