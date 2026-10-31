import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zfleigi8q.css';
import '../../css/u/u7tjjzyhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zfleigi8q"/><path class="u7tjjzyhq"/></g>`,
		"fallback": "coolicons:syringe-bulk-round",
	});
}

export default Component;
