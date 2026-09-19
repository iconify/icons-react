import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qpt0s3b7j.css';
import '../../css/s/seqtysokt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qpt0s3b7j"/><path clip-rule="evenodd" class="seqtysokt"/></g>`,
		"fallback": "healthicons:ppe-mask-n95-outline-24px",
	});
}

export default Component;
