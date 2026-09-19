import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sng8ypbhk.css';
import '../../css/c/cq51ogb1m.css';
import '../../css/k/khg43zqkt.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="sng8ypbhk"/><path class="cq51ogb1m"/><rect class="khg43zqkt"/></g>`,
		"fallback": "garden:user-lock-26",
	});
}

export default Component;
