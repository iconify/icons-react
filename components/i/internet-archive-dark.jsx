import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e54cwys7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e54cwys7t"/>`,
		"fallback": "selfhst:internet-archive-dark",
	});
}

export default Component;
