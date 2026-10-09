import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg0vzvbzz.css';
import '../../css/r/r2tsl51tj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg0vzvbzz"/><path class="r2tsl51tj"/>`,
		"fallback": "energy-icons:newspaper-48",
	});
}

export default Component;
