import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj7gr_b9p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj7gr_b9p"/>`,
		"fallback": "glyphs:signal-25",
	});
}

export default Component;
