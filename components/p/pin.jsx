import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ktcsf7b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ktcsf7b2m"/>`,
		"fallback": "lucide:pin",
	});
}

export default Component;
