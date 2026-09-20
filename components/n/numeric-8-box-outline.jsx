import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdtwd7bjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdtwd7bjv"/>`,
		"fallback": "mdi:numeric-8-box-outline",
	});
}

export default Component;
