import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n669t5b-i.css';
import '../../css/d/d1jrieb7c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n669t5b-i"/><path class="d1jrieb7c"/>`,
		"fallback": "energy-icons:thermal-camera-48-bold",
	});
}

export default Component;
