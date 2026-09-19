import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhqi1ub4i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhqi1ub4i"/>`,
		"fallback": "glyphs:line",
	});
}

export default Component;
