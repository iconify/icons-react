import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/ai_o9o6nn.css';
import '../../css/t/t6tblzbrr.css';
import '../../css/r/rzf1-f5ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ai_o9o6nn"/><path class="t6tblzbrr"/><path class="rzf1-f5ka"/></g>`,
		"fallback": "solar:reorder-2-outline",
	});
}

export default Component;
