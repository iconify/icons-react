import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/n1seudv0t.css';
import '../../css/g/gqhdvq_rz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="n1seudv0t"/><path class="gqhdvq_rz"/></g>`,
		"fallback": "streamline-freehand:safety-call-firefighters-1",
	});
}

export default Component;
