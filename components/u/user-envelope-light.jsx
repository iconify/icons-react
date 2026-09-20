import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yg1txzh2s.css';
import '../../css/h/hogs3fbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yg1txzh2s"/><path class="hogs3fbec"/></g>`,
		"fallback": "stash:user-envelope-light",
	});
}

export default Component;
