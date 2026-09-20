import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/saef0lbcq.css';
import '../../css/o/oi8evwbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="saef0lbcq"/><path class="oi8evwbpw"/></g>`,
		"fallback": "streamline-sharp-color:skype-flat",
	});
}

export default Component;
