import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p5a8rkbkg.css';
import '../../css/g/gcf56tbpb.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/n/nvjwwccph.css';
import '../../css/l/l285s9ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p5a8rkbkg wm-deco"/><path class="gcf56tbpb wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="nvjwwccph wm-k"/><path class="l285s9ben wm-a"/></g>`,
		"fallback": "withicons:lock-keyhole-blueprint",
	});
}

export default Component;
