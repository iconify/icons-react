import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-fl9ri0k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-fl9ri0k"/>`,
		"fallback": "vaadin:star-o",
	});
}

export default Component;
