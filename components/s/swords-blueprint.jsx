import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cbmnx5bxw.css';
import '../../css/r/rjnos190k.css';
import '../../css/h/h900o1u8p.css';
import '../../css/l/l8brmcc_z.css';
import '../../css/z/z9q6rvb-r.css';
import '../../css/a/aptbz3b8e.css';
import '../../css/s/se7ecy41e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="cbmnx5bxw wm-deco"/><path class="rjnos190k wm-deco"/><path class="h900o1u8p wm-deco"/><path class="l8brmcc_z wm-k"/><path class="wm-a z9q6rvb-r"/><path class="aptbz3b8e wm-k"/><path class="se7ecy41e wm-a"/></g>`,
		"fallback": "withicons:swords-blueprint",
	});
}

export default Component;
