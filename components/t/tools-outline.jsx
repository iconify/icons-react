import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu24x1v0r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mu24x1v0r"/>`,
		"fallback": "glyphs:tools-outline",
	});
}

export default Component;
