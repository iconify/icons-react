import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqfv4hn_o.css';
import '../../css/w/wqp7zgnaz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqfv4hn_o"/><path class="wqp7zgnaz"/>`,
		"fallback": "flat-color-icons:view-details",
	});
}

export default Component;
