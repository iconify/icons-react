import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th-l21bpt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th-l21bpt"/>`,
		"fallback": "oui:vis-map-coordinate",
	});
}

export default Component;
