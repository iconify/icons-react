import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/x/x7trl1brq.css';
import '../../css/q/q60wzeb2d.css';
import '../../css/f/fkc-zxhkr.css';
import '../../css/n/n_5reebuh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="x7trl1brq"/><path class="q60wzeb2d"/><path class="fkc-zxhkr"/><circle class="n_5reebuh"/></g>`,
		"fallback": "icon-park:s-turn-down",
	});
}

export default Component;
