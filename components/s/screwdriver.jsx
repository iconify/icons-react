import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d07xzfy7h.css';
import '../../css/m/mtmd5sbur.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="d07xzfy7h"/><path class="mtmd5sbur"/></g>`,
		"fallback": "streamline-plump:screwdriver",
	});
}

export default Component;
