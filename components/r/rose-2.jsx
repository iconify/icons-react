import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/d/df63occqr.css';
import '../../css/j/jo-80bb1d.css';
import '../../css/k/k5c2t3b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="df63occqr"/><path class="jo-80bb1d"/><path class="k5c2t3b-d"/></g>`,
		"fallback": "streamline-cyber:rose-2",
	});
}

export default Component;
