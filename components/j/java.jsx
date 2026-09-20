import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrvu35b3m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrvu35b3m"/>`,
		"fallback": "picon:java",
	});
}

export default Component;
