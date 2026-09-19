import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exngh_byi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exngh_byi"/>`,
		"fallback": "glyphs:pennant",
	});
}

export default Component;
