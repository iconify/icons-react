import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wwoto2b7e.css';
import '../../css/o/ol9y5c9kd.css';
import '../../css/w/w3exxgbev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wwoto2b7e"/><path class="ol9y5c9kd"/><path class="w3exxgbev"/></g>`,
		"fallback": "streamline-sharp-color:router-wifi-network-flat",
	});
}

export default Component;
