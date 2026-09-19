import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/leera0b-z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="leera0b-z"/>`,
		"fallback": "heroicons:receipt-percent-16-solid",
	});
}

export default Component;
