import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvrp96bmj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvrp96bmj"/>`,
		"fallback": "icon-park-outline:phone-off",
	});
}

export default Component;
