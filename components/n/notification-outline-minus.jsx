import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mltf9q9oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mltf9q9oz"/>`,
		"fallback": "ci:notification-outline-minus",
	});
}

export default Component;
