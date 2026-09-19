import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xuuig3bfw.css';
import '../../css/m/mjv0wacus.css';
import '../../css/q/qlniz9tvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xuuig3bfw"/><path class="mjv0wacus"/><path class="qlniz9tvc"/></g>`,
		"fallback": "iconoir:nintendo-switch",
	});
}

export default Component;
