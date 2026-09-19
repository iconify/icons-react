import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j97p7et3a.css';
import '../../css/a/ahhlf5tnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j97p7et3a"/><path class="ahhlf5tnz"/></g>`,
		"fallback": "hugeicons:pie-chart-square",
	});
}

export default Component;
