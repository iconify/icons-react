import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/bj-br9bjw.css';
import '../../css/u/u2lpm3b6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="bj-br9bjw"/><path class="u2lpm3b6a"/></g>`,
		"fallback": "icon-park-outline:symmetry",
	});
}

export default Component;
