import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/giasez0sn.css';
import '../../css/n/n9jcxlbrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="giasez0sn"/><path class="n9jcxlbrp"/></g>`,
		"fallback": "hugeicons:pie-chart-01",
	});
}

export default Component;
