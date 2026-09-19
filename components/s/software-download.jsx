import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g82ycsb8c.css';
import '../../css/v/v60qzebwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g82ycsb8c"/><path class="v60qzebwv"/></g>`,
		"fallback": "gg:software-download",
	});
}

export default Component;
