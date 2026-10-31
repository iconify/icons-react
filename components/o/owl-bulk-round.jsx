import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gfs3uib7x.css';
import '../../css/c/cbwi8-2-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gfs3uib7x"/><path class="cbwi8-2-o"/></g>`,
		"fallback": "coolicons:owl-bulk-round",
	});
}

export default Component;
