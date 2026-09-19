import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p4bv7nc2y.css';
import '../../css/e/e4_hhhitt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p4bv7nc2y"/><path class="e4_hhhitt"/></g>`,
		"fallback": "iconoir:mac-dock",
	});
}

export default Component;
