import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgqjy1bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kgqjy1bdi"/>`,
		"fallback": "withicons:receipt-solid",
	});
}

export default Component;
