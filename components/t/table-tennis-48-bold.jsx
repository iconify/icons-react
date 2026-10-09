import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezsp4f-sb.css';
import '../../css/w/w24yo_x-x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezsp4f-sb"/><path class="w24yo_x-x"/>`,
		"fallback": "energy-icons:table-tennis-48-bold",
	});
}

export default Component;
