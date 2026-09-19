import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgyo6bb4u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgyo6bb4u"/>`,
		"fallback": "glyphs:math-duo",
	});
}

export default Component;
