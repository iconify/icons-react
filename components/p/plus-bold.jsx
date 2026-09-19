import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py_xqg_-s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="py_xqg_-s"/>`,
		"fallback": "glyphs:plus-bold",
	});
}

export default Component;
