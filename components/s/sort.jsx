import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y92_fgbke.css';
import '../../css/r/rvc7i_b9t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle transform="rotate(-9 18.078 8.286)" class="y92_fgbke"/><path class="rvc7i_b9t"/></g>`,
		"fallback": "quill:sort",
	});
}

export default Component;
