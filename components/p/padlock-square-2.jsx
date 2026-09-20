import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/bo1rfe8eq.css';
import '../../css/e/ee-5u66pe.css';
import '../../css/g/g_5mfqg0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="bo1rfe8eq"/><path class="ee-5u66pe"/><path class="g_5mfqg0p"/></g>`,
		"fallback": "streamline-plump:padlock-square-2",
	});
}

export default Component;
