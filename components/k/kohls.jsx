import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onikkmh6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onikkmh6o"/>`,
		"fallback": "selfhst:kohls",
	});
}

export default Component;
