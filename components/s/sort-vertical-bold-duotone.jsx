import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s1f18zdzy.css';
import '../../css/x/xncq7db5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s1f18zdzy"/><path class="xncq7db5u"/></g>`,
		"fallback": "solar:sort-vertical-bold-duotone",
	});
}

export default Component;
