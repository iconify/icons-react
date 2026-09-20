import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/oajmuqbzh.css';
import '../../css/h/hdsz9zb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="oajmuqbzh"/><path class="hdsz9zb_t"/></g>`,
		"fallback": "lets-icons:pin-duotone",
	});
}

export default Component;
