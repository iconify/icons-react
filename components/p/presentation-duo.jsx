import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8aymsbir.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dgznh9z6x.css';
import '../../css/i/iu0-ovbgw.css';
import '../../css/r/rvpalfbkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p8aymsbir secondary"/><g class="dt0cm9dhy primary"><path class="dgznh9z6x"/><path class="iu0-ovbgw"/><path class="rvpalfbkp"/></g>`,
		"fallback": "iconaut:presentation-duo",
	});
}

export default Component;
