import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_vgbnh1a.css';
import '../../css/a/a_5r_9oli.css';
import '../../css/v/v3k1ki33g.css';
import '../../css/x/xbm1b9a_n.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s_vgbnh1a"/><path clip-rule="evenodd" class="a_5r_9oli"/><path class="v3k1ki33g"/><path class="xbm1b9a_n"/></g>`,
		"fallback": "glyphs-poly:pills",
	});
}

export default Component;
