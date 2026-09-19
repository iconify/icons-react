import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7hje7b3j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7hje7b3j"/>`,
		"fallback": "carbon:line-thin",
	});
}

export default Component;
