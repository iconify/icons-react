import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltn65fiok.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltn65fiok"/>`,
		"fallback": "selfhst:usertour-dark",
	});
}

export default Component;
