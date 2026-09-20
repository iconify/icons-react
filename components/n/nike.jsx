import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euksjz92v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euksjz92v"/>`,
		"fallback": "selfhst:nike",
	});
}

export default Component;
