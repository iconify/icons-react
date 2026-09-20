import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jxrvry_vl.css';
import '../../css/d/dt965rb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jxrvry_vl"/><path class="dt965rb6q"/></g>`,
		"fallback": "streamline-freehand:tape-cassette-1",
	});
}

export default Component;
