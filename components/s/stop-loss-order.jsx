import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gp0egaclj.css';
import '../../css/k/k3jeqtbnq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="gp0egaclj"/><path class="k3jeqtbnq"/></g>`,
		"fallback": "hugeicons:stop-loss-order",
	});
}

export default Component;
