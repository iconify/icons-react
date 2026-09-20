import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/z/zse56roln.css';
import '../../css/w/wt3mp0dla.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="zse56roln"/><path class="wt3mp0dla"/></g>`,
		"fallback": "streamline-plump:virtual-reality",
	});
}

export default Component;
