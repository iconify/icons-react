import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/frjwkab9r.css';
import '../../css/r/r5ew9ebzo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="frjwkab9r"/><path class="r5ew9ebzo"/></g>`,
		"fallback": "streamline-plump:lightbulb",
	});
}

export default Component;
