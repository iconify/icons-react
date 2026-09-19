import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c984stk_j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c984stk_j"/>`,
		"fallback": "glyphs:pause",
	});
}

export default Component;
