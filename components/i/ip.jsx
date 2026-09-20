import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkealni5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkealni5l"/>`,
		"fallback": "oui:ip",
	});
}

export default Component;
