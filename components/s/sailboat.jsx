import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tj8pek22w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tj8pek22w"/>`,
		"fallback": "fa7-solid:sailboat",
	});
}

export default Component;
