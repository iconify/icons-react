import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ie9_z75ey.css';
import '../../css/t/trpawbbtl.css';
import '../../css/e/evnbscrbr.css';
import '../../css/y/yc64rmg6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ie9_z75ey"/><path class="trpawbbtl"/><path class="evnbscrbr"/><path class="yc64rmg6b"/></g>`,
		"fallback": "streamline-freehand-color:phone-actions-ringing",
	});
}

export default Component;
