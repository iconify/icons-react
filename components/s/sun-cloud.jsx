import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b871xtbmf.css';
import '../../css/r/r2vu5bc9q.css';
import '../../css/j/jzks_jb0x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b871xtbmf"/><path class="r2vu5bc9q"/><path class="jzks_jb0x"/></g>`,
		"fallback": "at-icons:sun-cloud",
	});
}

export default Component;
