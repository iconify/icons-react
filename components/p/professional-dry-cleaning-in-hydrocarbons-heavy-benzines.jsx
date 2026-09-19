import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jgfm30bss.css';
import '../../css/k/k61c39nri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jgfm30bss"/><path class="k61c39nri"/></g>`,
		"fallback": "ginetex:professional-dry-cleaning-in-hydrocarbons-heavy-benzines",
	});
}

export default Component;
