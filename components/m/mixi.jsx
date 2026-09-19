import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4tn7uvvx.css';

const viewBox = {"width":717,"height":690};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4tn7uvvx"/>`,
		"fallback": "ls:mixi",
	});
}

export default Component;
