import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp5lk3b5y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kp5lk3b5y"/>`,
		"fallback": "picon:panty",
	});
}

export default Component;
