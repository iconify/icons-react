import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/o2fal7eyn.css';
import '../../css/b/b6rncdb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="o2fal7eyn"/><path class="b6rncdb4t"/></g>`,
		"fallback": "keyline-icons:key-round-sharp-duotone",
	});
}

export default Component;
