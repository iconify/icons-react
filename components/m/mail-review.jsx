import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/ha1m0acqh.css';
import '../../css/w/wkxwu3bsi.css';
import '../../css/t/t_1ysd53k.css';
import '../../css/f/fxoqbf0fg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ha1m0acqh"/><path class="wkxwu3bsi"/><path class="t_1ysd53k"/><path class="fxoqbf0fg"/></g>`,
		"fallback": "icon-park-outline:mail-review",
	});
}

export default Component;
