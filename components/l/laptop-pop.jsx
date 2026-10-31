import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brt534uak.css';
import '../../css/c/ce5riu44p.css';
import '../../css/w/wlw9pn3gb.css';
import '../../css/t/t_c0kmjlm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="brt534uak"/><path class="ce5riu44p"/><path class="wlw9pn3gb"/><path class="t_c0kmjlm"/></g>`,
		"fallback": "streamline-kameleon-color:laptop-pop",
	});
}

export default Component;
