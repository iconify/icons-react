import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rknwa3bti.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rknwa3bti"/>`,
		"fallback": "maki:volleyball",
	});
}

export default Component;
