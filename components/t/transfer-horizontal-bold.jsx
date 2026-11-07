import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb8a2xbld.css';
import '../../css/m/muj3adbzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb8a2xbld"/><path class="muj3adbzb"/>`,
		"fallback": "solar:transfer-horizontal-bold",
	});
}

export default Component;
