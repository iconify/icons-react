import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erj58-puz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erj58-puz"/>`,
		"fallback": "temaki:kitchen-sink",
	});
}

export default Component;
