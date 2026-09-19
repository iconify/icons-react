import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2wqe5ssz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2wqe5ssz"/>`,
		"fallback": "glyphs:search",
	});
}

export default Component;
