import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz8ow6yfn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz8ow6yfn"/>`,
		"fallback": "pinhead:map-pin-with-dot-on-open-book",
	});
}

export default Component;
