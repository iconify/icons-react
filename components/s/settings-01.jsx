import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/krhvsnyop.css';
import '../../css/o/o5t7_jbyu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="krhvsnyop"/><circle class="o5t7_jbyu"/></g>`,
		"fallback": "hugeicons:settings-01",
	});
}

export default Component;
