import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/t/tdcfrn_hi.css';
import '../../css/h/h2xt6ozov.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="tdcfrn_hi"/><path class="h2xt6ozov"/></g>`,
		"fallback": "streamline-plump:sun",
	});
}

export default Component;
