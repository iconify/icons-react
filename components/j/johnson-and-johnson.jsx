import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt3kvrv4y.css';

const viewBox = {"width":1000,"height":181.354};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt3kvrv4y"/>`,
		"fallback": "thesvg-color:johnson-and-johnson",
	});
}

export default Component;
