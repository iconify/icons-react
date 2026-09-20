import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w04by8oke.css';
import '../../css/z/zqnyg_1wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w04by8oke"/><path clip-rule="evenodd" class="zqnyg_1wr"/></g>`,
		"fallback": "reicon:language-filled",
	});
}

export default Component;
