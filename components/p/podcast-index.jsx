import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg8870b6e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg8870b6e"/>`,
		"fallback": "selfhst:podcast-index",
	});
}

export default Component;
