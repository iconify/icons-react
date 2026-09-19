import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/g3shrbbbg.css';
import '../../css/t/tofdy-80v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="g3shrbbbg"/><path class="tofdy-80v"/></g>`,
		"fallback": "icon-park-outline:shutter-priority",
	});
}

export default Component;
