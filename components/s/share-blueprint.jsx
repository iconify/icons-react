import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t461t6bwv.css';
import '../../css/m/mvwg0m8ia.css';
import '../../css/t/t218te2ox.css';
import '../../css/s/sn_ixid1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="t461t6bwv wm-deco"/><path class="mvwg0m8ia wm-deco"/><path class="t218te2ox wm-deco"/><path class="sn_ixid1w"/></g>`,
		"fallback": "withicons:share-blueprint",
	});
}

export default Component;
