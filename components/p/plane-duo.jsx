import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itb5q2b7t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itb5q2b7t"/>`,
		"fallback": "glyphs:plane-duo",
	});
}

export default Component;
