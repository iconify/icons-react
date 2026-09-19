import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mlyeq3b6o.css';
import '../../css/q/qk3buybpq.css';
import '../../css/s/s_24abblg.css';
import '../../css/f/f4ax4r8uu.css';

const viewBox = {"width":33,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mlyeq3b6o"/><path class="qk3buybpq"/><path class="s_24abblg"/><path class="f4ax4r8uu"/></g>`,
		"fallback": "et:pictures",
	});
}

export default Component;
