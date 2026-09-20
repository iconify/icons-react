import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pckvftb4q.css';
import '../../css/a/atwbp6bad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pckvftb4q"/><path class="atwbp6bad"/></g>`,
		"fallback": "reicon:sort-v-filled",
	});
}

export default Component;
