import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laax27b6a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laax27b6a"/>`,
		"fallback": "temaki:sign-and-car",
	});
}

export default Component;
