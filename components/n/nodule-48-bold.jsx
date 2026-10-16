import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po8d74wuq.css';
import '../../css/q/qq9-l9upr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po8d74wuq"/><path class="qq9-l9upr"/>`,
		"fallback": "energy-icons:nodule-48-bold",
	});
}

export default Component;
