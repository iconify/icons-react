import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fx-v4yl1e.css';
import '../../css/z/z736ycbzx.css';
import '../../css/g/g2xclxbug.css';
import '../../css/o/oo8xyndhe.css';
import '../../css/v/vug_rebuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="fx-v4yl1e wm-deco"/><path class="wm-deco z736ycbzx"/><path class="g2xclxbug wm-deco"/><path class="oo8xyndhe wm-k"/><path class="vug_rebuj wm-a"/></g>`,
		"fallback": "withicons:tv-blueprint",
	});
}

export default Component;
