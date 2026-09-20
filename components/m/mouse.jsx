import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x0cowp4_c.css';
import '../../css/e/e9iz66b6n.css';
import '../../css/v/vqsc5ck3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x0cowp4_c"/><path class="e9iz66b6n"/><path class="vqsc5ck3r"/></g>`,
		"fallback": "streamline-freehand:mouse",
	});
}

export default Component;
