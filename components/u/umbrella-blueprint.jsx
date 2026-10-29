import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/quk27zbyr.css';
import '../../css/x/x0ui5_bui.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/r/r5b83pa5x.css';
import '../../css/s/s43cixb_t.css';
import '../../css/b/bukqgsbpj.css';
import '../../css/l/l00vc-b5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="quk27zbyr wm-deco"/><path class="wm-deco x0ui5_bui"/><path class="cf3uzcrzx wm-deco"/><path class="r5b83pa5x wm-k"/><path class="s43cixb_t wm-a"/><path class="bukqgsbpj wm-k"/><path class="l00vc-b5m wm-a"/></g>`,
		"fallback": "withicons:umbrella-blueprint",
	});
}

export default Component;
