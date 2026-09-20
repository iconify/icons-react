import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q-e1uzboo.css';
import '../../css/f/fwkqnoj8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q-e1uzboo"/><path class="fwkqnoj8x"/></g>`,
		"fallback": "streamline-freehand:strategy-business-success-peak",
	});
}

export default Component;
