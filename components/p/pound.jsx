import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9gpmfb8x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9gpmfb8x"/>`,
		"fallback": "pinhead:pound",
	});
}

export default Component;
