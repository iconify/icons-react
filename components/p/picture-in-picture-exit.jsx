import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dj22uqbdf.css';
import '../../css/q/qtuol_b8e.css';
import '../../css/b/by8w4yalm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dj22uqbdf"/><rect transform="rotate(180 13 12)" class="qtuol_b8e"/><path class="by8w4yalm"/></g>`,
		"fallback": "proicons:picture-in-picture-exit",
	});
}

export default Component;
