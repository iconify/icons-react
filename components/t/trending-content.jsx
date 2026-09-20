import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/n1ij5db0i.css';
import '../../css/y/ypk9v5b6h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="n1ij5db0i"/><path class="ypk9v5b6h"/></g>`,
		"fallback": "streamline-plump:trending-content",
	});
}

export default Component;
