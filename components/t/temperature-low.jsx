import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yokzwwjel.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yokzwwjel"/>`,
		"fallback": "fa7-solid:temperature-low",
	});
}

export default Component;
