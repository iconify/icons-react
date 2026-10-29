import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uy881ybxx.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/u/uh5jk-bmu.css';
import '../../css/v/vn62m23aq.css';
import '../../css/s/sdyw8fb6z.css';
import '../../css/q/qtk4mou_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="uy881ybxx wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="uh5jk-bmu wm-k"/><path class="vn62m23aq wm-a"/><path class="sdyw8fb6z wm-k"/><path class="qtk4mou_m wm-a"/></g>`,
		"fallback": "withicons:save-all-blueprint",
	});
}

export default Component;
