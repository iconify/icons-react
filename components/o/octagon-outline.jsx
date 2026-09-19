import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up3_59bqe.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="up3_59bqe"/>`,
		"fallback": "glyphs:octagon-outline",
	});
}

export default Component;
