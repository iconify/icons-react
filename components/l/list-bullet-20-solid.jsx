import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g53-7mbic.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g53-7mbic"/>`,
		"fallback": "heroicons:list-bullet-20-solid",
	});
}

export default Component;
