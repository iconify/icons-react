import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ropndeb2q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ropndeb2q"/>`,
		"fallback": "oui:sort-down",
	});
}

export default Component;
