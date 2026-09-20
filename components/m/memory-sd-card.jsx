import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zdfjgl3iv.css';
import '../../css/g/gbphoubjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zdfjgl3iv"/><path class="gbphoubjr"/></g>`,
		"fallback": "streamline-freehand:memory-sd-card",
	});
}

export default Component;
