import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mggfspa_j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mggfspa_j"/>`,
		"fallback": "la:receipt-solid",
	});
}

export default Component;
