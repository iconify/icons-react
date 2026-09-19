import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/c4wfsm4rx.css';
import '../../css/y/yn551zh7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="c4wfsm4rx"/><path class="yn551zh7z"/></g>`,
		"fallback": "icon-park-solid:ungroup",
	});
}

export default Component;
