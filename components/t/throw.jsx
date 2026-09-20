import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdkjc0b1e.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdkjc0b1e"/>`,
		"fallback": "picon:throw",
	});
}

export default Component;
