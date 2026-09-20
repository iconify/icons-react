import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck53eebmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ck53eebmi"/>`,
		"fallback": "selfhst:rallly",
	});
}

export default Component;
