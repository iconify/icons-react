import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/nrlirxy2k.css';
import '../../css/f/fj7p-_bgu.css';
import '../../css/b/bxjv56brc.css';
import '../../css/s/swemmc6sx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="nrlirxy2k wm-deco"/><path class="fj7p-_bgu wm-deco"/><path class="bxjv56brc wm-deco"/><path class="swemmc6sx"/></g>`,
		"fallback": "withicons:virus-blueprint",
	});
}

export default Component;
