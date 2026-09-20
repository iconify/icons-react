import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fg4h95g7a.css';
import '../../css/v/vx_k-dbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fg4h95g7a"/><path class="vx_k-dbmo"/></g>`,
		"fallback": "streamline-sharp-color:voice-scan-1-flat",
	});
}

export default Component;
