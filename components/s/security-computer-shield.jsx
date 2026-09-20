import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m083ykboc.css';
import '../../css/n/nqpxdtb1o.css';
import '../../css/h/hptpef2-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m083ykboc"/><path class="nqpxdtb1o"/><path class="hptpef2-e"/></g>`,
		"fallback": "streamline-freehand:security-computer-shield",
	});
}

export default Component;
