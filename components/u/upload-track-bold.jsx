import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtedal7-d.css';
import '../../css/x/xwh5nd-be.css';
import '../../css/z/z27mt2r4g.css';
import '../../css/x/xem_2fbwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dtedal7-d"/><path class="xwh5nd-be"/><path class="z27mt2r4g"/><path clip-rule="evenodd" class="xem_2fbwz"/></g>`,
		"fallback": "solar:upload-track-bold",
	});
}

export default Component;
