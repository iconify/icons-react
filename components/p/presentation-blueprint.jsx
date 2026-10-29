import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d0m0jsbve.css';
import '../../css/q/qq-_jvbcz.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/e/eu9_y7hoo.css';
import '../../css/d/dljqukb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="d0m0jsbve wm-deco"/><path class="qq-_jvbcz wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="eu9_y7hoo wm-k"/><path class="dljqukb2t wm-a"/></g>`,
		"fallback": "withicons:presentation-blueprint",
	});
}

export default Component;
