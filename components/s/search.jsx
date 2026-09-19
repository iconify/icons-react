import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jozn2iebr.css';

const viewBox = {"width":740,"height":840};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jozn2iebr"/>`,
		"fallback": "il:search",
	});
}

export default Component;
