import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o130g5b-q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o130g5b-q"/>`,
		"fallback": "glyphs-poly:sparkle",
	});
}

export default Component;
