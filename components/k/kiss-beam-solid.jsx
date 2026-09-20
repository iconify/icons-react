import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4rohbeuc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4rohbeuc"/>`,
		"fallback": "la:kiss-beam-solid",
	});
}

export default Component;
