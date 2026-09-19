import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2l7ej-yh.css';
import '../../css/x/xtkb6fvqt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2l7ej-yh"/><path class="xtkb6fvqt"/>`,
		"fallback": "carbon:touch-1-down",
	});
}

export default Component;
