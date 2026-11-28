import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/thlucdcjr.css';
import '../../css/s/shja-ozij.css';
import '../../css/l/ltnontbea.css';
import '../../css/a/anwiq72wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="thlucdcjr"/><path class="shja-ozij"/><path class="ltnontbea"/><path class="anwiq72wm"/></g>`,
		"fallback": "iconaut:mic",
	});
}

export default Component;
