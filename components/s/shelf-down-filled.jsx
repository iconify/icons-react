import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5jkcbbc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xn5jkcbbc"/>`,
		"fallback": "lsicon:shelf-down-filled",
	});
}

export default Component;
