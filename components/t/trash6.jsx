import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/loc0hddiu.css';
import '../../css/a/atgvw93cz.css';
import '../../css/k/k5bll-bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="loc0hddiu"/><path class="atgvw93cz"/><path class="k5bll-bkc"/></g>`,
		"fallback": "reicon:trash6",
	});
}

export default Component;
