import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srfh7msce.css';

const viewBox = {"width":1792,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srfh7msce"/>`,
		"fallback": "fa:strikethrough",
	});
}

export default Component;
