import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2eom2boo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2eom2boo"/>`,
		"fallback": "selfhst:scanopy-dark",
	});
}

export default Component;
