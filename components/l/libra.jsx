import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/q/qifg3hudd.css';
import '../../css/y/y7cj8cboo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="qifg3hudd"/><path class="y7cj8cboo"/></g>`,
		"fallback": "icon-park-outline:libra",
	});
}

export default Component;
