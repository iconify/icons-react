import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxcyr-bko.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxcyr-bko"/>`,
		"fallback": "foundation:social-steam",
	});
}

export default Component;
