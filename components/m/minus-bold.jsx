import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze1sy3buw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze1sy3buw"/>`,
		"fallback": "glyphs:minus-bold",
	});
}

export default Component;
