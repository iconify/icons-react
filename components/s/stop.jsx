import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tba065b6y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tba065b6y"/>`,
		"fallback": "oui:stop",
	});
}

export default Component;
