import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/va1_tpb9y.css';
import '../../css/w/wco3r3bcg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="va1_tpb9y"/><path class="wco3r3bcg"/></g>`,
		"fallback": "streamline-plump:pinwheel",
	});
}

export default Component;
