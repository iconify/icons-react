import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nibn50kqx.css';
import '../../css/p/pdz-36b4z.css';
import '../../css/u/umfxv1jgl.css';
import '../../css/s/s_fnwpyrw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nibn50kqx"/><path class="pdz-36b4z"/><path class="umfxv1jgl"/><path class="s_fnwpyrw"/></g>`,
		"fallback": "streamline-color:potted-flower-tulip",
	});
}

export default Component;
