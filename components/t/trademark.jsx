import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2at43bsa.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2at43bsa"/>`,
		"fallback": "ant-design:trademark",
	});
}

export default Component;
