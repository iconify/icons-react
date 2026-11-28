import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m310abrnx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pyvr6bb5u.css';
import '../../css/a/aqep-bb2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m310abrnx secondary"/><g class="dt0cm9dhy primary"><path class="pyvr6bb5u"/><path class="aqep-bb2d"/></g>`,
		"fallback": "iconaut:mushroom-duo",
	});
}

export default Component;
