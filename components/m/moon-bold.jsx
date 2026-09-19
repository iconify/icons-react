import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nyjerbcbj.css';
import '../../css/h/hyv-byb-b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nyjerbcbj"/><path class="hyv-byb-b"/></g>`,
		"fallback": "glyphs:moon-bold",
	});
}

export default Component;
