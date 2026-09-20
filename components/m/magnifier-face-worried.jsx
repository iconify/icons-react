import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-n4jnblk.css';
import '../../css/h/hd6s9cbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x-n4jnblk"/><path class="hd6s9cbvp"/></g>`,
		"fallback": "reicon:magnifier-face-worried",
	});
}

export default Component;
