import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9jxscckh.css';
import '../../css/h/hwk25ejtb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9jxscckh"/><path class="hwk25ejtb"/>`,
		"fallback": "energy-icons:map-data-48-bold",
	});
}

export default Component;
