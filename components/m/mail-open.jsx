import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/i/i1fj-9bbt.css';
import '../../css/s/su5nvlbjx.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="i1fj-9bbt"/><path class="su5nvlbjx"/></g>`,
		"fallback": "system-uicons:mail-open",
	});
}

export default Component;
