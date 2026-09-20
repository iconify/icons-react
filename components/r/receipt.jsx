import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/n/n4wg8hb7c.css';
import '../../css/i/iuoe8u8la.css';
import '../../css/w/w41tqmb-r.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="n4wg8hb7c"/><path class="iuoe8u8la"/><path class="w41tqmb-r"/></g>`,
		"fallback": "system-uicons:receipt",
	});
}

export default Component;
