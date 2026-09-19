import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bj-vjquhd.css';
import '../../css/b/b8luwwbbq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bj-vjquhd"/><path class="b8luwwbbq"/></g>`,
		"fallback": "glyphs:snowflake-bold",
	});
}

export default Component;
