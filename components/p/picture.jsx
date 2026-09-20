import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zkbga2bms.css';
import '../../css/m/m0-54lvnp.css';
import '../../css/i/i9hetd4rr.css';
import '../../css/m/m6hk46bel.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 3)" class="bi12bsetm"><g class="zkbga2bms"><path class="m0-54lvnp"/><path class="i9hetd4rr"/></g><circle class="m6hk46bel"/></g>`,
		"fallback": "system-uicons:picture",
	});
}

export default Component;
