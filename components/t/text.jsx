import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5k4lwueq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5k4lwueq"/>`,
		"fallback": "glyphs-poly:text",
	});
}

export default Component;
