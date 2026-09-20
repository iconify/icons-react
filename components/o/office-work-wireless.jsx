import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/djvtvndpb.css';
import '../../css/o/owz1wrvty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="djvtvndpb"/><path class="owz1wrvty"/></g>`,
		"fallback": "streamline-freehand:office-work-wireless",
	});
}

export default Component;
