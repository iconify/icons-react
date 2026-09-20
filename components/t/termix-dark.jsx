import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3q5q3bdi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3q5q3bdi"/>`,
		"fallback": "selfhst:termix-dark",
	});
}

export default Component;
