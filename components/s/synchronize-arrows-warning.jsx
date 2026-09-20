import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q6ne0f4bi.css';
import '../../css/v/v1n904bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q6ne0f4bi"/><path class="v1n904bzp"/></g>`,
		"fallback": "streamline-freehand:synchronize-arrows-warning",
	});
}

export default Component;
