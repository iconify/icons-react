import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2fefybui.css';

const viewBox = {"width":717,"height":672};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2fefybui"/>`,
		"fallback": "ls:login",
	});
}

export default Component;
