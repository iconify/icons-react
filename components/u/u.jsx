import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k82mb-blf.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k82mb-blf"/>`,
		"fallback": "whh:u",
	});
}

export default Component;
