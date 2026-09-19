import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw5145ocz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw5145ocz"/>`,
		"fallback": "f7:paintbrush",
	});
}

export default Component;
