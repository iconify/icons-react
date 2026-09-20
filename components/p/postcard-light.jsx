import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_pewl6-d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_pewl6-d"/>`,
		"fallback": "selfhst:postcard-light",
	});
}

export default Component;
