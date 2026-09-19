import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye4_c9bnm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye4_c9bnm"/>`,
		"fallback": "whh:loadingthree",
	});
}

export default Component;
