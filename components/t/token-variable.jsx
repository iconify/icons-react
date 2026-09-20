import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5ckjhb9h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5ckjhb9h"/>`,
		"fallback": "oui:token-variable",
	});
}

export default Component;
