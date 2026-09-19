import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr2b31b6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr2b31b6y"/>`,
		"fallback": "flowbite:shuffle-outline",
	});
}

export default Component;
