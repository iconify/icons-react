import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qtxwlnbka.css';
import '../../css/x/xfkepfife.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qtxwlnbka"/><path class="xfkepfife"/></g>`,
		"fallback": "glyphs:save-bold",
	});
}

export default Component;
