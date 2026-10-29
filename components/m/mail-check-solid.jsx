import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gyg95ebsh.css';
import '../../css/t/tbt13cxzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gyg95ebsh"/><path class="tbt13cxzu wm-s"/></g>`,
		"fallback": "withicons:mail-check-solid",
	});
}

export default Component;
