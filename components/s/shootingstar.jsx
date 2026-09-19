import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pos2pcbxf.css';
import '../../css/s/syd5dvn_a.css';
import '../../css/o/o6ib3twus.css';
import '../../css/e/ezlh-7cze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pos2pcbxf"/><path class="syd5dvn_a"/><path class="o6ib3twus"/><path class="ezlh-7cze"/>`,
		"fallback": "fxemoji:shootingstar",
	});
}

export default Component;
