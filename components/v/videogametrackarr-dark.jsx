import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmbki3b2s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmbki3b2s"/>`,
		"fallback": "selfhst:videogametrackarr-dark",
	});
}

export default Component;
