import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/ry115bbfy.css';
import '../../css/v/vt2zlobnj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ry115bbfy"/><path class="vt2zlobnj"/></g>`,
		"fallback": "streamline-plump:man-arm-raises-2-alternate",
	});
}

export default Component;
