import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tmvjeobmo.css';
import '../../css/x/xon_9ib8a.css';
import '../../css/j/jeqbjaccq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="tmvjeobmo"/><path class="xon_9ib8a"/><path class="jeqbjaccq"/></g>`,
		"fallback": "keyline-icons:laptop-sparkles-duotone",
	});
}

export default Component;
