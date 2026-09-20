import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdh04ws8q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdh04ws8q"/>`,
		"fallback": "streamline:travel-places-column-1-pillar-building-historical-column",
	});
}

export default Component;
