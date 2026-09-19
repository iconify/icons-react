import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-l1pd0_w.css';
import '../../css/b/brobnwmaq.css';
import '../../css/b/b7jxa2myi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h-l1pd0_w"><path clip-rule="evenodd" class="brobnwmaq"/><path class="b7jxa2myi"/></g>`,
		"fallback": "iconoir:planet-solid",
	});
}

export default Component;
