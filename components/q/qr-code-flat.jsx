import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/krcelihbz.css';
import '../../css/n/n76sdzv2k.css';
import '../../css/q/q44e-r43q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="krcelihbz"/><path class="n76sdzv2k"/><path class="q44e-r43q"/></g>`,
		"fallback": "streamline-flex-color:qr-code-flat",
	});
}

export default Component;
