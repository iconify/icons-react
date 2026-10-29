import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/tar18rbeo.css';
import '../../css/w/wr92o1bsm.css';
import '../../css/o/o---ur47v.css';
import '../../css/w/wt4fzw49e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="tar18rbeo wm-deco"/><path class="wm-deco wr92o1bsm"/><path class="o---ur47v wm-k"/><path class="wm-a wt4fzw49e"/></g>`,
		"fallback": "withicons:newspaper-blueprint",
	});
}

export default Component;
