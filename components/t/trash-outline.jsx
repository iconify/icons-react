import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bx8dsuc6q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bx8dsuc6q"/>`,
		"fallback": "glyphs:trash-outline",
	});
}

export default Component;
