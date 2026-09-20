import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/c/ch-3webui.css';
import '../../css/o/ohqhwob9p.css';
import '../../css/m/ms_1nlb9c.css';
import '../../css/l/ld5bm6beq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ch-3webui"/><path class="ohqhwob9p"/><path class="ms_1nlb9c"/><path class="ld5bm6beq"/></g>`,
		"fallback": "streamline-plump-color:user-single-neutral-male",
	});
}

export default Component;
