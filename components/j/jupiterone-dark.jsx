import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_7ovik9t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_7ovik9t"/>`,
		"fallback": "selfhst:jupiterone-dark",
	});
}

export default Component;
