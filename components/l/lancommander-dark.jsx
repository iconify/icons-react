import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nd66evbly.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nd66evbly"/>`,
		"fallback": "selfhst:lancommander-dark",
	});
}

export default Component;
