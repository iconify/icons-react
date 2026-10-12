import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5dj6cczh.css';
import '../../css/s/sbasrbbib.css';
import '../../css/a/a80_5ohhu.css';
import '../../css/q/qgubfwrfh.css';
import '../../css/k/kxp9ddzsz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5dj6cczh"/><path class="sbasrbbib"/><path class="a80_5ohhu"/><path class="qgubfwrfh"/><path class="kxp9ddzsz"/>`,
		"fallback": "energy-icons:pylon-alert-48",
	});
}

export default Component;
