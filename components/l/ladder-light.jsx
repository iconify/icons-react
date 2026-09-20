import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th995e03e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th995e03e"/>`,
		"fallback": "selfhst:ladder-light",
	});
}

export default Component;
