import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmmz9qtup.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmmz9qtup"/>`,
		"fallback": "glyphs:ticket-duo",
	});
}

export default Component;
