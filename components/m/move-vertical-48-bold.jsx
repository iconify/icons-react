import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t8l47cczo.css';
import '../../css/o/omo7ytb6n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t8l47cczo"/><path class="omo7ytb6n"/>`,
		"fallback": "energy-icons:move-vertical-48-bold",
	});
}

export default Component;
