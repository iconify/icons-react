import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saq33obio.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saq33obio"/>`,
		"fallback": "pinhead:motorboat-and-tag",
	});
}

export default Component;
