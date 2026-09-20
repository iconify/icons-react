import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwy927bzx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwy927bzx"/>`,
		"fallback": "selfhst:mailjet-dark",
	});
}

export default Component;
