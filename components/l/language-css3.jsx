import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlumm6bif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlumm6bif"/>`,
		"fallback": "mdi:language-css3",
	});
}

export default Component;
