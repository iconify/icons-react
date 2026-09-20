import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzp-t0tmy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzp-t0tmy"/>`,
		"fallback": "oui:kql-function",
	});
}

export default Component;
