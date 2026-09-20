import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baigs9rhf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baigs9rhf"/>`,
		"fallback": "selfhst:uber-light",
	});
}

export default Component;
