import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dvro07b6o.css';
import '../../css/q/qrkin6mjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="dvro07b6o"/><path class="qrkin6mjb"/></g>`,
		"fallback": "streamline-sharp-color:voice-typing-word-convert-flat",
	});
}

export default Component;
