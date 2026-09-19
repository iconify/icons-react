import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d8yk8n4fw.css';
import '../../css/k/kn3vpvupr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d8yk8n4fw"/><path class="kn3vpvupr"/></g>`,
		"fallback": "hugeicons:tasbih",
	});
}

export default Component;
