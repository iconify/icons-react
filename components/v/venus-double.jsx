import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1h-1wb2l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1h-1wb2l"/>`,
		"fallback": "fa-solid:venus-double",
	});
}

export default Component;
