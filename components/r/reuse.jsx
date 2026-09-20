import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/i/igb9ee7qs.css';
import '../../css/t/tlino87gl.css';
import '../../css/r/r-ctfne6x.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="igb9ee7qs"/><path class="tlino87gl"/><path class="r-ctfne6x"/></g>`,
		"fallback": "system-uicons:reuse",
	});
}

export default Component;
