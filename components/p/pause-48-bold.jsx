import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1mno5bjr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1mno5bjr"/>`,
		"fallback": "energy-icons:pause-48-bold",
	});
}

export default Component;
