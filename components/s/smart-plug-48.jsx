import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j4xw6ab6k.css';
import '../../css/w/waaecn3wa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j4xw6ab6k"/><path class="waaecn3wa"/>`,
		"fallback": "energy-icons:smart-plug-48",
	});
}

export default Component;
