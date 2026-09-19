import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/odqj4ibcr.css';
import '../../css/r/rctv42bmh.css';
import '../../css/d/ddc43f37b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="odqj4ibcr"/><path class="rctv42bmh"/><path class="ddc43f37b"/></g>`,
		"fallback": "glyphs-poly:spa",
	});
}

export default Component;
