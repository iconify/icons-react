import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/pi-hm4qac.css';
import '../../css/d/d1yjqobcl.css';
import '../../css/e/erhzy_boy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="pi-hm4qac"/><path class="d1yjqobcl"/><path class="erhzy_boy"/></g>`,
		"fallback": "streamline-plump:location-pin-3",
	});
}

export default Component;
