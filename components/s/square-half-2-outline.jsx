import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi7q1bdwu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vi7q1bdwu"/>`,
		"fallback": "glyphs:square-half-2-outline",
	});
}

export default Component;
