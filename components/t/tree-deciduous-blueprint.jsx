import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lg-7uid0k.css';
import '../../css/b/bkkn1cxiz.css';
import '../../css/t/t218te2ox.css';
import '../../css/x/x1kyi8bxl.css';
import '../../css/w/woa9y0e8n.css';
import '../../css/v/vuh7_gyal.css';
import '../../css/z/zawcaob5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lg-7uid0k wm-deco"/><path class="bkkn1cxiz wm-deco"/><path class="t218te2ox wm-deco"/><path class="wm-k x1kyi8bxl"/><path class="wm-a woa9y0e8n"/><path class="vuh7_gyal wm-k"/><path class="wm-a zawcaob5w"/></g>`,
		"fallback": "withicons:tree-deciduous-blueprint",
	});
}

export default Component;
