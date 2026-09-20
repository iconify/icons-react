import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rc_vk6bjn.css';
import '../../css/a/a3fjogm6p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rc_vk6bjn"/><path class="a3fjogm6p"/></g>`,
		"fallback": "streamline-freehand:money-bag-euro",
	});
}

export default Component;
