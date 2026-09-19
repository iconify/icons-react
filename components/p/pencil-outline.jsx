import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1e26ggfy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x1e26ggfy"/>`,
		"fallback": "glyphs:pencil-outline",
	});
}

export default Component;
