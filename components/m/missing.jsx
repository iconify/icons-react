import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmtnt-_tb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmtnt-_tb"/>`,
		"fallback": "subway:missing",
	});
}

export default Component;
