import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py5k_qboi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py5k_qboi"/>`,
		"fallback": "temaki:pet-grooming",
	});
}

export default Component;
