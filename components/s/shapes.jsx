import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt1qiacqb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt1qiacqb"/>`,
		"fallback": "glyphs:shapes",
	});
}

export default Component;
