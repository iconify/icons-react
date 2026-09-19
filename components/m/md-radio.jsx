import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oveujm7yn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oveujm7yn"/>`,
		"fallback": "ion:md-radio",
	});
}

export default Component;
