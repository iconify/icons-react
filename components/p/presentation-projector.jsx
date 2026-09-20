import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vlccl_j5f.css';
import '../../css/q/qai0uwb9u.css';
import '../../css/w/w9768wbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vlccl_j5f"/><path class="qai0uwb9u"/><path class="w9768wbws"/></g>`,
		"fallback": "streamline-freehand:presentation-projector",
	});
}

export default Component;
