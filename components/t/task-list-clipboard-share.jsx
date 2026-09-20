import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mbk1rbcqn.css';
import '../../css/f/fv4tjzrua.css';
import '../../css/i/ii4kaebow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mbk1rbcqn"/><path class="fv4tjzrua"/><path class="ii4kaebow"/></g>`,
		"fallback": "streamline-freehand:task-list-clipboard-share",
	});
}

export default Component;
