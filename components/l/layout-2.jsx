import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_k4d2ull.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_k4d2ull"/>`,
		"fallback": "glyphs:layout-2",
	});
}

export default Component;
