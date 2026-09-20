import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv9z5ty7h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv9z5ty7h"/>`,
		"fallback": "temaki:pedestrian",
	});
}

export default Component;
