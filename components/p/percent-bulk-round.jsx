import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/demqk_b8r.css';
import '../../css/a/awyi7ubmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="demqk_b8r"/><path class="awyi7ubmy"/></g>`,
		"fallback": "coolicons:percent-bulk-round",
	});
}

export default Component;
