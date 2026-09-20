import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/fur303b7v.css';
import '../../css/l/lusicdbey.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="fur303b7v"/><path class="lusicdbey"/></g>`,
		"fallback": "streamline-plump:wave-signal-square",
	});
}

export default Component;
