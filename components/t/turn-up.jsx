import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8adc4r9o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8adc4r9o"/>`,
		"fallback": "fa7-solid:turn-up",
	});
}

export default Component;
