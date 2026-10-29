import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/prthrmbng.css';
import '../../css/y/ym55n8biq.css';
import '../../css/v/v826tbcka.css';
import '../../css/v/v7oxsddra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="prthrmbng"/><path class="wm-a ym55n8biq"/><path class="v826tbcka wm-s"/><path class="v7oxsddra wm-s"/></g>`,
		"fallback": "withicons:mistletoe",
	});
}

export default Component;
