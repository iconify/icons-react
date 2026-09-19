import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jof2l9d2w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jof2l9d2w"/>`,
		"fallback": "cib:r",
	});
}

export default Component;
