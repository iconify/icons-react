import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lwu92z-th.css';
import '../../css/o/o04fwjb8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lwu92z-th"/><path class="o04fwjb8n"/></g>`,
		"fallback": "streamline-freehand:server-error-404-not-found",
	});
}

export default Component;
