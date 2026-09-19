import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t--peni4z.css';
import '../../css/y/ykigzcc7p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t--peni4z"/><path class="ykigzcc7p"/></g>`,
		"fallback": "glyphs:quote-single-bold",
	});
}

export default Component;
