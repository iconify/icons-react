import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/so0qh0b3x.css';
import '../../css/e/eyy1xci_o.css';
import '../../css/r/rnq02cbsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="so0qh0b3x"/><path class="eyy1xci_o"/><path class="rnq02cbsr"/></g>`,
		"fallback": "healthicons:llin-24px",
	});
}

export default Component;
