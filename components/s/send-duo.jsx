import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baq4hj58q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baq4hj58q"/>`,
		"fallback": "glyphs:send-duo",
	});
}

export default Component;
