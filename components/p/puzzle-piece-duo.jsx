import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4gcxe4mo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4gcxe4mo"/>`,
		"fallback": "glyphs:puzzle-piece-duo",
	});
}

export default Component;
