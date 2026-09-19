import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5fo0f5ok.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5fo0f5ok"/>`,
		"fallback": "gis:timer",
	});
}

export default Component;
