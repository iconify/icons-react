import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2bvri4qz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2bvri4qz"/>`,
		"fallback": "glyphs:signal-2",
	});
}

export default Component;
