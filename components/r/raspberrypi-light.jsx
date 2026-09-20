import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/s/swww2f5zv.css';
import '../../css/v/vo4oclbto.css';
import '../../css/b/bvccarxma.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="swww2f5zv"/><path class="vo4oclbto"/><path class="bvccarxma"/></g>`,
		"fallback": "skill-icons:raspberrypi-light",
	});
}

export default Component;
