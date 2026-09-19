import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kz9mh0v6m.css';
import '../../css/e/e_7i-ix1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="kz9mh0v6m"/><path class="e_7i-ix1w"/></g>`,
		"fallback": "icon-park-solid:more-app",
	});
}

export default Component;
