import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u3ei5mnsl.css';
import '../../css/y/yb_4niwqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u3ei5mnsl"/><path class="yb_4niwqu"/></g>`,
		"fallback": "nrk:super-emoji-poop-angry",
	});
}

export default Component;
