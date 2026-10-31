import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9i4yiffc.css';
import '../../css/m/mlth9vbtv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g9i4yiffc"/><path class="mlth9vbtv"/></g>`,
		"fallback": "coolicons:superscript-bulk-round",
	});
}

export default Component;
