import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/f/f9g5z2bmo.css';
import '../../css/k/kv6jg4bfo.css';
import '../../css/d/dxbxl11oo.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="f9g5z2bmo"/><path class="kv6jg4bfo"/><path class="dxbxl11oo"/></g>`,
		"fallback": "system-uicons:shuffle",
	});
}

export default Component;
