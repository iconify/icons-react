import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h4s9_sbob.css';
import '../../css/x/xpldn3u0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h4s9_sbob"/><path class="xpldn3u0o"/></g>`,
		"fallback": "streamline-sharp-color:threat-usb-flat",
	});
}

export default Component;
