import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnirk37en.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnirk37en"/>`,
		"fallback": "vaadin:margin-top",
	});
}

export default Component;
