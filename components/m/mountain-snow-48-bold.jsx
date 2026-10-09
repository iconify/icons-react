import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg1-fhq_s.css';
import '../../css/p/p9d7ykejn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg1-fhq_s"/><path class="p9d7ykejn"/>`,
		"fallback": "energy-icons:mountain-snow-48-bold",
	});
}

export default Component;
