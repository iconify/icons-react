import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i75-_3t5k.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i75-_3t5k"/>`,
		"fallback": "lineicons:volume-medium",
	});
}

export default Component;
