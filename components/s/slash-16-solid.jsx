import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpk-spksa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jpk-spksa"/>`,
		"fallback": "heroicons:slash-16-solid",
	});
}

export default Component;
