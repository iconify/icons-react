import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d7va7rbxi.css';

const viewBox = {"width":679,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d7va7rbxi"/>`,
		"fallback": "ls:notify",
	});
}

export default Component;
