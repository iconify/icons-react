import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cy12kb2lv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cy12kb2lv"/>`,
		"fallback": "energy-icons:menu-48-bold",
	});
}

export default Component;
