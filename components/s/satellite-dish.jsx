import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/j/jhyph6bqw.css';
import '../../css/m/m2w35yd5p.css';
import '../../css/d/d98fgxblr.css';
import '../../css/p/pbtg_mb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="jhyph6bqw"/><path class="m2w35yd5p"/><path class="d98fgxblr"/><path class="pbtg_mb8e"/></g>`,
		"fallback": "streamline-sharp-color:satellite-dish",
	});
}

export default Component;
