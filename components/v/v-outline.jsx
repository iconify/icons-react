import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-nqzrbwg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-nqzrbwg"/>`,
		"fallback": "glyphs:v-outline",
	});
}

export default Component;
