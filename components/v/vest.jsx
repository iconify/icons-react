import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf4-6acwx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf4-6acwx"/>`,
		"fallback": "picon:vest",
	});
}

export default Component;
