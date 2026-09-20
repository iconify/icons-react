import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v-2s-6w0q.css';
import '../../css/w/w87mcxhmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="v-2s-6w0q"/><path class="w87mcxhmk"/></g>`,
		"fallback": "streamline-freehand:microprocessor-computer-chip-32-bit",
	});
}

export default Component;
