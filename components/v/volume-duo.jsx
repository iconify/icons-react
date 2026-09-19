import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_ghm2b4i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_ghm2b4i"/>`,
		"fallback": "glyphs:volume-duo",
	});
}

export default Component;
