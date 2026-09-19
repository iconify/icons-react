import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcmnmhj8q.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcmnmhj8q"/>`,
		"fallback": "si-glyph:thermometer",
	});
}

export default Component;
