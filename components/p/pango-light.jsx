import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwzed5t3e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwzed5t3e"/>`,
		"fallback": "selfhst:pango-light",
	});
}

export default Component;
