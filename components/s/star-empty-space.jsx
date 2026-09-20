import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4k2mib2z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4k2mib2z"/>`,
		"fallback": "oui:star-empty-space",
	});
}

export default Component;
