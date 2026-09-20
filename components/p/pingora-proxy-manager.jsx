import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czfhl0lnw.css';
import '../../css/f/f4wrckbty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czfhl0lnw"/><path class="f4wrckbty"/>`,
		"fallback": "selfhst:pingora-proxy-manager",
	});
}

export default Component;
