import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/m/mgh9q_bnb.css';
import '../../css/p/p01swbcrb.css';
import '../../css/h/ha34b3bre.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="mgh9q_bnb"/><path class="p01swbcrb"/><path class="ha34b3bre"/></g>`,
		"fallback": "icon-park-outline:multi-function-knife",
	});
}

export default Component;
