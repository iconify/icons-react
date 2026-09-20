import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmvyxybqh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmvyxybqh"/>`,
		"fallback": "osmic:laundry-14",
	});
}

export default Component;
