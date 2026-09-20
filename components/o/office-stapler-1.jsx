import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f957wyv6r.css';
import '../../css/o/obnp_h36c.css';
import '../../css/d/dskvu9bov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f957wyv6r"/><path class="obnp_h36c"/><path class="dskvu9bov"/></g>`,
		"fallback": "streamline-freehand:office-stapler-1",
	});
}

export default Component;
