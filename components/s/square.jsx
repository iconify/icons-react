import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa6as_vez.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wa6as_vez"/>`,
		"fallback": "pepicons:square",
	});
}

export default Component;
