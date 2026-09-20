import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xs5j6gb1t.css';
import '../../css/h/hzjivfo9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xs5j6gb1t"/><path class="hzjivfo9t"/></g>`,
		"fallback": "streamline-freehand:volume-control-medium-1",
	});
}

export default Component;
