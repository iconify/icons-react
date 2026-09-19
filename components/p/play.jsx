import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikl9azbmc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikl9azbmc"/>`,
		"fallback": "glyphs:play",
	});
}

export default Component;
