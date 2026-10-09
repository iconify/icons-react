import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcp6u-oop.css';
import '../../css/x/xgx2z7ryy.css';
import '../../css/o/o4v1t0brm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcp6u-oop"/><path class="xgx2z7ryy"/><path class="o4v1t0brm"/>`,
		"fallback": "energy-icons:price-up-48-bold",
	});
}

export default Component;
