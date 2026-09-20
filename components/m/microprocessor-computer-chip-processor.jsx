import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wmfbd7b1m.css';
import '../../css/j/jtswtu3fh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wmfbd7b1m"/><path class="jtswtu3fh"/></g>`,
		"fallback": "streamline-freehand:microprocessor-computer-chip-processor",
	});
}

export default Component;
