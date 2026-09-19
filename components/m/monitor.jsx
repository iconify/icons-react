import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x80n7zxwc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x80n7zxwc"/>`,
		"fallback": "glyphs:monitor",
	});
}

export default Component;
