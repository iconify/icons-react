import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/d4oyb2wqm.css';
import '../../css/t/tw5p3fb0j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="d4oyb2wqm"/><path class="tw5p3fb0j"/></g>`,
		"fallback": "icon-park-outline:phone-outgoing",
	});
}

export default Component;
