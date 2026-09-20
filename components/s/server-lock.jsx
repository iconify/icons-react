import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mbgjqnbpf.css';
import '../../css/z/z2g_6mbia.css';
import '../../css/e/e5nmbab7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mbgjqnbpf"/><path class="z2g_6mbia"/><path class="e5nmbab7a"/></g>`,
		"fallback": "streamline-freehand:server-lock",
	});
}

export default Component;
