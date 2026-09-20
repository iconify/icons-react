import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl6n36bmz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl6n36bmz"/>`,
		"fallback": "temaki:tools",
	});
}

export default Component;
