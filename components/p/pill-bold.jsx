import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqubd6bic.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqubd6bic"/>`,
		"fallback": "glyphs:pill-bold",
	});
}

export default Component;
