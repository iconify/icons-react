import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlh0h9bwc.css';

const viewBox = {"width":489,"height":628};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlh0h9bwc"/>`,
		"fallback": "ls:next",
	});
}

export default Component;
