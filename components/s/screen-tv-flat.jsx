import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yian4bcbi.css';
import '../../css/p/phelvmbqn.css';
import '../../css/h/hj977r91q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="yian4bcbi"/><path class="phelvmbqn"/><path class="hj977r91q"/></g>`,
		"fallback": "streamline-sharp-color:screen-tv-flat",
	});
}

export default Component;
