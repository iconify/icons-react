import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/josv8_q2r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="josv8_q2r"/>`,
		"fallback": "glyphs-poly:one",
	});
}

export default Component;
