import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk2lrzbsz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk2lrzbsz"/>`,
		"fallback": "glyphs-poly:o",
	});
}

export default Component;
