import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nmgjinb-j.css';
import '../../css/c/clkkgpbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nmgjinb-j"/><path class="clkkgpbwe wm-s"/></g>`,
		"fallback": "withicons:server-cog-solid",
	});
}

export default Component;
