import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_x5j7b6h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_x5j7b6h"/>`,
		"fallback": "glyphs:signal-1-duo",
	});
}

export default Component;
