import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ybdv8_b4u.css';
import '../../css/m/m049zlwwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ybdv8_b4u"/><path class="m049zlwwd"/></g>`,
		"fallback": "streamline-sharp-color:slide-show-play-flat",
	});
}

export default Component;
