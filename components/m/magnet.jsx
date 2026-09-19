import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwb4r1b5r.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwb4r1b5r"/>`,
		"fallback": "fa:magnet",
	});
}

export default Component;
