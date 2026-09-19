import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/en1hy5blk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="en1hy5blk"/>`,
		"fallback": "fluent-mdl2:tablet-selected",
	});
}

export default Component;
