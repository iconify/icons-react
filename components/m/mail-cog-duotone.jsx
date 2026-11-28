import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zlevz1bix.css';
import '../../css/q/qfsrx4bos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zlevz1bix"/><path class="primary qfsrx4bos"/></g>`,
		"fallback": "iconaut:mail-cog-duotone",
	});
}

export default Component;
