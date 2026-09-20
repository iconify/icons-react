import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d0mwp1bqm.css';
import '../../css/o/oh3bw7brl.css';
import '../../css/v/vr0fsbmwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d0mwp1bqm"/><path class="oh3bw7brl"/><path class="vr0fsbmwx"/></g>`,
		"fallback": "streamline-freehand:podcast-microphone-international-1",
	});
}

export default Component;
