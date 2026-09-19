import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7enk3mab.css';

const viewBox = {"width":328,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7enk3mab"/>`,
		"fallback": "ps:user",
	});
}

export default Component;
