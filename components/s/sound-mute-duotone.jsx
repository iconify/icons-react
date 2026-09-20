import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/y/yx57vmbbs.css';
import '../../css/n/n36hq-2cd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="yx57vmbbs"/><path class="n36hq-2cd"/></g>`,
		"fallback": "lets-icons:sound-mute-duotone",
	});
}

export default Component;
