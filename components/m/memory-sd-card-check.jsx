import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ngc21ykgs.css';
import '../../css/b/b61wf3bnd.css';
import '../../css/d/didkhtbvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ngc21ykgs"/><path class="b61wf3bnd"/><path class="didkhtbvq"/></g>`,
		"fallback": "streamline-freehand:memory-sd-card-check",
	});
}

export default Component;
