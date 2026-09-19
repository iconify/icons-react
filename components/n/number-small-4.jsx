import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5o7lacsx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5o7lacsx"/>`,
		"fallback": "carbon:number-small-4",
	});
}

export default Component;
