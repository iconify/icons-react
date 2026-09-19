import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqgck3bqf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hqgck3bqf"/>`,
		"fallback": "glyphs:walking-outline",
	});
}

export default Component;
