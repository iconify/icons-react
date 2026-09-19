import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk2c95-jo.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk2c95-jo"/>`,
		"fallback": "whh:mayanpyramid",
	});
}

export default Component;
