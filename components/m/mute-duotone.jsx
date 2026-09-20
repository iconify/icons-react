import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6hs6eniv.css';
import '../../css/l/lbtpfvy-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b6hs6eniv"/><path class="lbtpfvy-z"/></g>`,
		"fallback": "reicon:mute-duotone",
	});
}

export default Component;
