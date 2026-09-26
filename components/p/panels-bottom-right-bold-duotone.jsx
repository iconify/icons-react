import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jq-l3wspt.css';
import '../../css/l/lof832c4s.css';
import '../../css/a/am2oa8bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jq-l3wspt"/><path class="lof832c4s"/><path class="am2oa8bcf"/></g>`,
		"fallback": "solar:panels-bottom-right-bold-duotone",
	});
}

export default Component;
