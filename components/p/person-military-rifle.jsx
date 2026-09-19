import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdcgpdrlo.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdcgpdrlo"/>`,
		"fallback": "fa7-solid:person-military-rifle",
	});
}

export default Component;
