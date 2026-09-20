import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tqeegk2kn.css';
import '../../css/y/yxjnf1b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tqeegk2kn"/><path class="yxjnf1b2u"/></g>`,
		"fallback": "streamline-sharp-color:remove-alert-clock-flat",
	});
}

export default Component;
