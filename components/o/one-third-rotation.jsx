import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/m/mb9z8v2ur.css';
import '../../css/h/hafszr1ue.css';
import '../../css/r/rb0lxrxek.css';
import '../../css/v/v9gu8mbbm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="mb9z8v2ur"/><path class="hafszr1ue"/><path class="rb0lxrxek"/><path class="v9gu8mbbm"/></g>`,
		"fallback": "icon-park:one-third-rotation",
	});
}

export default Component;
