import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v-yi-ybpi.css';
import '../../css/o/ouvp0jdyj.css';
import '../../css/k/kzcio_bgg.css';
import '../../css/w/w03x0-bud.css';
import '../../css/w/wcwroebbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v-yi-ybpi wm-shadow"/><path class="ouvp0jdyj"/><path class="kzcio_bgg"/><path class="w03x0-bud"/><path class="wcwroebbu"/></g>`,
		"fallback": "withicons-retro:rectangle-ellipsis",
	});
}

export default Component;
