import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nn8id8fdf.css';
import '../../css/y/y7r8_w2re.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nn8id8fdf"/><path class="y7r8_w2re"/></g>`,
		"fallback": "hugeicons:text-creation",
	});
}

export default Component;
