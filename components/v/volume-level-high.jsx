import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k9m1wmbsy.css';
import '../../css/i/ix9obvbmn.css';
import '../../css/n/ngqx55bct.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k9m1wmbsy"/><path class="ix9obvbmn"/><path class="ngqx55bct"/></g>`,
		"fallback": "streamline-flex-color:volume-level-high",
	});
}

export default Component;
