import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wqc26mdly.css';
import '../../css/x/xun4g8t8p.css';
import '../../css/a/ahfgyujxk.css';
import '../../css/u/uj0e0abff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="wqc26mdly"/><path class="xun4g8t8p"/></g><path class="ahfgyujxk"/><path class="uj0e0abff"/></g>`,
		"fallback": "solar:swimming-bold-duotone",
	});
}

export default Component;
