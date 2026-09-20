import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/r41gcub-d.css';
import '../../css/k/kyqjb7bsd.css';
import '../../css/v/v74z9kkuq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="r41gcub-d"/><path class="kyqjb7bsd"/><path class="v74z9kkuq"/></g>`,
		"fallback": "streamline-plump:production-belt",
	});
}

export default Component;
