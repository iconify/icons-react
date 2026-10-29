import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/aqtnzbc3d.css';
import '../../css/h/h-5_4xbim.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/x/xg7yvrt4k.css';
import '../../css/x/xznu0ibva.css';
import '../../css/a/ahnqb7bpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="aqtnzbc3d wm-deco"/><path class="h-5_4xbim wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k xg7yvrt4k"/><path class="wm-a xznu0ibva"/><path class="ahnqb7bpy wm-k"/></g>`,
		"fallback": "withicons:send-blueprint",
	});
}

export default Component;
