import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3dpzbtra.css';
import '../../css/m/m9104igsh.css';
import '../../css/w/w455zy2rh.css';
import '../../css/h/h-qhc362c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y3dpzbtra"><path class="m9104igsh"/><path class="w455zy2rh"/><path class="h-qhc362c"/></g>`,
		"fallback": "icon-park-outline:volleyball",
	});
}

export default Component;
