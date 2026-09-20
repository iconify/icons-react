import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s-7ok_6qe.css';
import '../../css/c/cjz7vbkrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="s-7ok_6qe"/><path class="cjz7vbkrs"/></g>`,
		"fallback": "streamline-plump:medical-bag",
	});
}

export default Component;
