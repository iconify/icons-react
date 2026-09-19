import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkv818cfu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkv818cfu"/>`,
		"fallback": "glyphs:view-expand-bold",
	});
}

export default Component;
