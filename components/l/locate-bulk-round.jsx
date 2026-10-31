import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sg4i_ud7e.css';
import '../../css/x/xge8cnb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sg4i_ud7e"/><path class="xge8cnb7e"/></g>`,
		"fallback": "coolicons:locate-bulk-round",
	});
}

export default Component;
