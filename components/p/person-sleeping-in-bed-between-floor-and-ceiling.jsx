import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9045w0jl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9045w0jl"/>`,
		"fallback": "pinhead:person-sleeping-in-bed-between-floor-and-ceiling",
	});
}

export default Component;
