import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p_liwbbdx.css';
import '../../css/k/ktatrpbwe.css';
import '../../css/s/somg6d7kc.css';
import '../../css/n/ni2s7jrqo.css';
import '../../css/r/r7ugneius.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p_liwbbdx wm-deco"/><path class="ktatrpbwe wm-deco"/><path class="somg6d7kc wm-deco"/><path class="ni2s7jrqo wm-k"/><path class="r7ugneius wm-a"/></g>`,
		"fallback": "withicons:wand-blueprint",
	});
}

export default Component;
