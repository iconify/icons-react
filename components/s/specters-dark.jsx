import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urp6r9jfz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urp6r9jfz"/>`,
		"fallback": "selfhst:specters-dark",
	});
}

export default Component;
