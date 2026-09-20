import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/m1mh2gbyt.css';
import '../../css/x/xuyahubhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="m1mh2gbyt"/><path class="xuyahubhm"/></g>`,
		"fallback": "lets-icons:sort-down-light",
	});
}

export default Component;
