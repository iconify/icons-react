import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0e5sw3yl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0e5sw3yl"/>`,
		"fallback": "glyphs:star-half-duo",
	});
}

export default Component;
