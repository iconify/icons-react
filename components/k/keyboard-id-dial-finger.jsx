import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z8a_ylb8g.css';
import '../../css/g/gl8jsk54s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z8a_ylb8g"/><path class="gl8jsk54s"/></g>`,
		"fallback": "streamline-freehand:keyboard-id-dial-finger",
	});
}

export default Component;
