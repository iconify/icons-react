import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fym2klg0f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fym2klg0f"/>`,
		"fallback": "cib:samsung-pay",
	});
}

export default Component;
