import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/luq94mbzw.css';
import '../../css/r/rnu7am-vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="luq94mbzw"/><path class="rnu7am-vz"/></g>`,
		"fallback": "streamline-freehand-color:keyboard-id-dial-finger",
	});
}

export default Component;
