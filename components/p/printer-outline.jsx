import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb5vv-0rq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pb5vv-0rq"/>`,
		"fallback": "glyphs:printer-outline",
	});
}

export default Component;
