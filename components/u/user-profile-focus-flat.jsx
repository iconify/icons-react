import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g35coj2xn.css';
import '../../css/m/m_p96hixc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g35coj2xn"/><path class="m_p96hixc"/></g>`,
		"fallback": "streamline-color:user-profile-focus-flat",
	});
}

export default Component;
