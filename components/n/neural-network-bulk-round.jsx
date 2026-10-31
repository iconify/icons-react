import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a30bwub1c.css';
import '../../css/x/x10zmccxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a30bwub1c"/><path class="x10zmccxi"/></g>`,
		"fallback": "coolicons:neural-network-bulk-round",
	});
}

export default Component;
