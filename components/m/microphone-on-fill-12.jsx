import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/ftvnhccxn.css';
import '../../css/d/dqor2ik2p.css';
import '../../css/t/tydacswje.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ftvnhccxn"/><rect class="dqor2ik2p"/></g><path class="tydacswje"/>`,
		"fallback": "garden:microphone-on-fill-12",
	});
}

export default Component;
