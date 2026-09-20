import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/it8fpsc-h.css';
import '../../css/e/e2-l5iqcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="it8fpsc-h"/><path class="e2-l5iqcg"/></g>`,
		"fallback": "streamline-freehand:microphone-karaoke-1",
	});
}

export default Component;
