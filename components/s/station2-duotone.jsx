import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ixuuqf97k.css';
import '../../css/z/zpf28kbqf.css';
import '../../css/s/se1b8acff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ixuuqf97k"/><path class="zpf28kbqf"/><path class="se1b8acff"/></g>`,
		"fallback": "reicon:station2-duotone",
	});
}

export default Component;
