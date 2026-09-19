import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2-xu8boa.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2-xu8boa"/>`,
		"fallback": "fluent-mdl2:timeline-delivery",
	});
}

export default Component;
