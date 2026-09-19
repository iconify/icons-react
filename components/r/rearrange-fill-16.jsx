import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xz6d5opni.css';
import '../../css/t/trnmlvb1m.css';
import '../../css/s/sq7kakbys.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="xz6d5opni"/><rect class="trnmlvb1m"/><rect class="sq7kakbys"/></g>`,
		"fallback": "garden:rearrange-fill-16",
	});
}

export default Component;
