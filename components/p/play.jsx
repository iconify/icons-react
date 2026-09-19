import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msez2ntih.css';

const viewBox = {"width":585,"height":684};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msez2ntih"/>`,
		"fallback": "ls:play",
	});
}

export default Component;
