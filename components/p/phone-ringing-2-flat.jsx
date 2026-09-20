import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ae63apbwj.css';
import '../../css/v/vt36tqb-p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ae63apbwj"/><path class="vt36tqb-p"/></g>`,
		"fallback": "streamline-color:phone-ringing-2-flat",
	});
}

export default Component;
