import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc46zh7yn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc46zh7yn"/>`,
		"fallback": "zondicons:map",
	});
}

export default Component;
