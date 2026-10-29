import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h6hzmw_la.css';
import '../../css/r/rojo8acxw.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/w/w07woac0g.css';
import '../../css/w/wuxib33uk.css';
import '../../css/x/x2nj8ubqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="h6hzmw_la wm-deco"/><path class="rojo8acxw wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="w07woac0g wm-k"/><path class="wm-a wuxib33uk"/><path class="wm-k x2nj8ubqa"/></g>`,
		"fallback": "withicons:trash-2-blueprint",
	});
}

export default Component;
