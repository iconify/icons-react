import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-j_9y_2k.css';
import '../../css/n/nsncu0byu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-j_9y_2k"/><path class="nsncu0byu"/>`,
		"fallback": "energy-icons:kettle-20-bold",
	});
}

export default Component;
