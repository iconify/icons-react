import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrm4pgbwi.css';
import '../../css/v/vs6my9btk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrm4pgbwi"/><path class="vs6my9btk"/>`,
		"fallback": "energy-icons:send-horizontal-48",
	});
}

export default Component;
