import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngt0lm-8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngt0lm-8g"/>`,
		"fallback": "la:uber",
	});
}

export default Component;
