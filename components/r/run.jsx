import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1d4hcvwf.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y1d4hcvwf"/>`,
		"fallback": "picon:run",
	});
}

export default Component;
