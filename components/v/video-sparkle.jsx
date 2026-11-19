import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bz6muwb-n.css';
import '../../css/i/iz10jbblu.css';
import '../../css/i/i2p_p6b4g.css';
import '../../css/n/ny1tw4bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bz6muwb-n"/><path class="iz10jbblu"/><path class="i2p_p6b4g"/><path class="ny1tw4bjo"/></g>`,
		"fallback": "andrsrxn:video-sparkle",
	});
}

export default Component;
