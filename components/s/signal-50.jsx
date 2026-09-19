import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_e50nvyq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_e50nvyq"/>`,
		"fallback": "glyphs:signal-50",
	});
}

export default Component;
