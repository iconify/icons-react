import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aneo2yrwc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aneo2yrwc"/>`,
		"fallback": "glyphs:play-bold",
	});
}

export default Component;
