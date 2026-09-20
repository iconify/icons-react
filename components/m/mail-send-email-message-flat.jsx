import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o29hlacsl.css';
import '../../css/q/qfvuukufs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o29hlacsl"/><path class="qfvuukufs"/></g>`,
		"fallback": "streamline-color:mail-send-email-message-flat",
	});
}

export default Component;
