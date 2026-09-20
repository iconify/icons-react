import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rx9b28b0k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rx9b28b0k"/>`,
		"fallback": "pinhead:map-pin-with-dot",
	});
}

export default Component;
