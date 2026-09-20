import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/rj80pbb9l.css';
import '../../css/r/r4lc0mb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="rj80pbb9l"/><path class="r4lc0mb1l"/></g>`,
		"fallback": "streamline-cyber:night-mode",
	});
}

export default Component;
