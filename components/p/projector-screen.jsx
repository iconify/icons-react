import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/g/gec6rjqza.css';
import '../../css/g/gcj-4k1bt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="gec6rjqza"/><path class="gcj-4k1bt"/></g>`,
		"fallback": "streamline-plump:projector-screen",
	});
}

export default Component;
