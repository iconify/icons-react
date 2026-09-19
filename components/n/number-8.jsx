import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge1l8697w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge1l8697w"/>`,
		"fallback": "carbon:number-8",
	});
}

export default Component;
