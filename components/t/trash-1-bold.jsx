import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8cnf1h0z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h8cnf1h0z"/>`,
		"fallback": "glyphs:trash-1-bold",
	});
}

export default Component;
