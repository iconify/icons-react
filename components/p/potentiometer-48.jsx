import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5ss8-b2m.css';
import '../../css/l/l1epn2jfk.css';
import '../../css/m/m82nk1bgk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5ss8-b2m"/><path class="l1epn2jfk"/><path class="m82nk1bgk"/>`,
		"fallback": "energy-icons:potentiometer-48",
	});
}

export default Component;
