import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-qpscc4k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-qpscc4k"/>`,
		"fallback": "glyphs:trash",
	});
}

export default Component;
