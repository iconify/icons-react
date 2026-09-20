import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/ww5hx6beq.css';
import '../../css/r/r2vuxvbse.css';
import '../../css/m/mjugc6i_m.css';
import '../../css/n/newjsub2a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ww5hx6beq"/><path class="r2vuxvbse"/><path class="mjugc6i_m"/><path class="newjsub2a"/></g>`,
		"fallback": "streamline-plump-color:module",
	});
}

export default Component;
