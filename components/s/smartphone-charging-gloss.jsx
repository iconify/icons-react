import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kecnv9bfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kecnv9bfy"/>`,
		"fallback": "withicons:smartphone-charging-gloss",
	});
}

export default Component;
