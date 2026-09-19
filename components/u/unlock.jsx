import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/nziymmjan.css';
import '../../css/e/ej3cr6b9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="nziymmjan"/><path class="ej3cr6b9e"/></g>`,
		"fallback": "icon-park-outline:unlock",
	});
}

export default Component;
