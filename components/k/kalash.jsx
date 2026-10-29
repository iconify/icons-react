import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oi-opqu9k.css';
import '../../css/t/tatv7kkeq.css';
import '../../css/y/ybu7qgplj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oi-opqu9k"/><path class="tatv7kkeq"/><path class="wm-a ybu7qgplj"/></g>`,
		"fallback": "withicons:kalash",
	});
}

export default Component;
