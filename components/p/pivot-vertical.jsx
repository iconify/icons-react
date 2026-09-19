import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgfy-nl4h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgfy-nl4h"/>`,
		"fallback": "carbon:pivot-vertical",
	});
}

export default Component;
