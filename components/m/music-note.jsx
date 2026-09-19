import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em3hccbqp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em3hccbqp"/>`,
		"fallback": "glyphs:music-note",
	});
}

export default Component;
