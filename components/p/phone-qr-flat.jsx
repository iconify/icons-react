import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/j1_-cubnf.css';
import '../../css/q/qkx-km2uh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="j1_-cubnf"/><path class="qkx-km2uh"/></g>`,
		"fallback": "streamline-color:phone-qr-flat",
	});
}

export default Component;
