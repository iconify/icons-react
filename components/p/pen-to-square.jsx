import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jv0kxeboj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jv0kxeboj"/>`,
		"fallback": "fa6-regular:pen-to-square",
	});
}

export default Component;
