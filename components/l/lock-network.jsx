import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vjnzkcc4r.css';
import '../../css/p/pj00kjcrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vjnzkcc4r"/><path class="pj00kjcrg"/></g>`,
		"fallback": "streamline-freehand:lock-network",
	});
}

export default Component;
