import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hx-py_msp.css';
import '../../css/i/i7bfnabyt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="hx-py_msp"/><path class="i7bfnabyt"/></g>`,
		"fallback": "icon-park:vip-one",
	});
}

export default Component;
