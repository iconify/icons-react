import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/euw4ylplj.css';
import '../../css/u/u-2brwj7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="euw4ylplj"/><path class="u-2brwj7e"/></g>`,
		"fallback": "coolicons:list-minus-bulk-round",
	});
}

export default Component;
