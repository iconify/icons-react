import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbgb-vbsk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbgb-vbsk"/>`,
		"fallback": "pinhead:pickup-truck-with-truck-cap",
	});
}

export default Component;
