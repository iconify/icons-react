import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-0aukb_i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-0aukb_i"/>`,
		"fallback": "carbon:mac-option",
	});
}

export default Component;
