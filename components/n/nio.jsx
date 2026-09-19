import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9976bbqs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9976bbqs"/>`,
		"fallback": "cryptocurrency:nio",
	});
}

export default Component;
