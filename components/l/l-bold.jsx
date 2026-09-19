import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnwo8kn8b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnwo8kn8b"/>`,
		"fallback": "glyphs:l-bold",
	});
}

export default Component;
