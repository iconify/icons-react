import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h97jr84-d.css';
import '../../css/f/fn6dn7wph.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/f/f0u1wlb_y.css';
import '../../css/t/tx_450bvl.css';
import '../../css/v/v-w_39dny.css';
import '../../css/a/anx4u7b3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="h97jr84-d wm-deco"/><path class="fn6dn7wph wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="f0u1wlb_y wm-k"/><path class="tx_450bvl wm-a"/><path class="v-w_39dny wm-k"/><path class="anx4u7b3p wm-a"/></g>`,
		"fallback": "withicons:messages-blueprint",
	});
}

export default Component;
