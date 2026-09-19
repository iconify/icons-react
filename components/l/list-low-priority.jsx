import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi0f-zb-z.css';
import '../../css/j/jvrj_gb8g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi0f-zb-z"/><path class="jvrj_gb8g"/>`,
		"fallback": "cil:list-low-priority",
	});
}

export default Component;
