import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r75m5p1ee.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r75m5p1ee"/>`,
		"fallback": "glyphs:toggle-2-outline",
	});
}

export default Component;
