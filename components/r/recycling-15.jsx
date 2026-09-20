import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuy5q6b4c.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cuy5q6b4c"/>`,
		"fallback": "maki:recycling-15",
	});
}

export default Component;
