import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrhq8kw0t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrhq8kw0t"/>`,
		"fallback": "oui:token-package",
	});
}

export default Component;
