import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r71f7qbmu.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r71f7qbmu"/>`,
		"fallback": "fa7-solid:square-binary",
	});
}

export default Component;
