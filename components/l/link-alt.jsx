import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/m/mp-x5krpf.css';
import '../../css/j/jh_olinoe.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="mp-x5krpf"/><path class="jh_olinoe"/></g>`,
		"fallback": "system-uicons:link-alt",
	});
}

export default Component;
