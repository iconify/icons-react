import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyg45n2yc.css';
import '../../css/h/htonzo4-k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyg45n2yc"/><path class="htonzo4-k"/>`,
		"fallback": "energy-icons:monopile-48-bold",
	});
}

export default Component;
