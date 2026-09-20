import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7xgi5bqp.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7xgi5bqp"/>`,
		"fallback": "picon:temperature",
	});
}

export default Component;
