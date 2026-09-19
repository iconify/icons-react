import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/p/pt-0x-bak.css';
import '../../css/u/ub3citboa.css';
import '../../css/l/lxj99hpsx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path clip-rule="evenodd" class="pt-0x-bak"/><path class="ub3citboa"/><path class="lxj99hpsx"/></g>`,
		"fallback": "icon-park-solid:me",
	});
}

export default Component;
