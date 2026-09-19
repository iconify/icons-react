import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/n/nji_bybpl.css';
import '../../css/s/s-_6qybzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="nji_bybpl"/><path class="s-_6qybzr"/></g>`,
		"fallback": "icon-park:lemon",
	});
}

export default Component;
