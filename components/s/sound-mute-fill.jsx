import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_ips4bgc.css';
import '../../css/q/qtxqbwz6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_ips4bgc"/><path class="qtxqbwz6f"/></g>`,
		"fallback": "lets-icons:sound-mute-fill",
	});
}

export default Component;
