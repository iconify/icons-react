import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo9elgb9s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo9elgb9s"/>`,
		"fallback": "glyphs:restroom",
	});
}

export default Component;
