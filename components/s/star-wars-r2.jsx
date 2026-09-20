import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/f/ff65rl0lw.css';
import '../../css/v/vixbg3b4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ff65rl0lw"/><path class="vixbg3b4v"/></g>`,
		"fallback": "streamline-cyber:star-wars-r2",
	});
}

export default Component;
