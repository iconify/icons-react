import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg8y9i1fi.css';

const viewBox = {"width":472,"height":472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg8y9i1fi"/>`,
		"fallback": "zmdi:sun",
	});
}

export default Component;
