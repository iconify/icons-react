import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rcmmxc5om.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rcmmxc5om"/>`,
		"fallback": "fa7-solid:piggy-bank",
	});
}

export default Component;
