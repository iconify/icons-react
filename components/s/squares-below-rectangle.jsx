import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr_nq_b1z.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr_nq_b1z"/>`,
		"fallback": "f7:squares-below-rectangle",
	});
}

export default Component;
