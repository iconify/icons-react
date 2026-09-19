import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pi4yw5b9m.css';
import '../../css/w/w3xlc1d0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pi4yw5b9m"/><path class="w3xlc1d0c"/></g>`,
		"fallback": "hugeicons:pexels",
	});
}

export default Component;
