import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pzrd8lgix.css';
import '../../css/d/deh0ozbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="pzrd8lgix"/><path class="deh0ozbjs"/></g>`,
		"fallback": "streamline-sharp-color:mail-send-email-message-flat",
	});
}

export default Component;
