import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/c/cwsqv5b-n.css';
import '../../css/s/su5nvlbjx.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="cwsqv5b-n"/><path class="su5nvlbjx"/></g>`,
		"fallback": "system-uicons:mail",
	});
}

export default Component;
