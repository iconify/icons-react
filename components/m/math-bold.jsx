import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_8et7y8w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_8et7y8w"/>`,
		"fallback": "glyphs:math-bold",
	});
}

export default Component;
