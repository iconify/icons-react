import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u37d7hbgy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u37d7hbgy"/>`,
		"fallback": "selfhst:personal-management-system-light",
	});
}

export default Component;
