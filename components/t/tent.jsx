import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrl37cc2x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrl37cc2x"/>`,
		"fallback": "glyphs:tent",
	});
}

export default Component;
