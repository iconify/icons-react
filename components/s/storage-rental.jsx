import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_c3n_rwo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_c3n_rwo"/>`,
		"fallback": "temaki:storage-rental",
	});
}

export default Component;
