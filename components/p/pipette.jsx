import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sjhkt6bhu.css';
import '../../css/j/jrapsbbrm.css';
import '../../css/b/bqm3gtbge.css';
import '../../css/k/kymm-cb-b.css';
import '../../css/j/jgogmk-tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="sjhkt6bhu wm-shadow"/><path class="jrapsbbrm wm-shadow"/><path class="bqm3gtbge"/><path class="kymm-cb-b"/><path class="jgogmk-tb"/></g>`,
		"fallback": "withicons-brutal:pipette",
	});
}

export default Component;
