import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpj_vsb3z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wpj_vsb3z"/>`,
		"fallback": "glyphs:play-circle-bold",
	});
}

export default Component;
