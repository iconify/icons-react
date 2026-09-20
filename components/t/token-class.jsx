import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qapc79bwu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qapc79bwu"/>`,
		"fallback": "oui:token-class",
	});
}

export default Component;
