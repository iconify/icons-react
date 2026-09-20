import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_50olhjj.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_50olhjj"/>`,
		"fallback": "picon:updouble",
	});
}

export default Component;
