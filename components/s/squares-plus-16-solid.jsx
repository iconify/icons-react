import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v19ilacll.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v19ilacll"/>`,
		"fallback": "heroicons:squares-plus-16-solid",
	});
}

export default Component;
