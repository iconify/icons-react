import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqeig8tmv.css';
import '../../css/x/xwmv3qb7e.css';
import '../../css/t/t3xeeshqm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqeig8tmv"/><path class="xwmv3qb7e"/><path class="t3xeeshqm"/>`,
		"fallback": "energy-icons:palm-tree-48",
	});
}

export default Component;
