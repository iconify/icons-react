import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5ix4pw3w.css';
import '../../css/y/yx_v63b6x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5ix4pw3w"/><path class="yx_v63b6x"/>`,
		"fallback": "cil:tag",
	});
}

export default Component;
