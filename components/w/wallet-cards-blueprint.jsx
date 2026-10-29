import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jx7j-sbmy.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/d/da5rk30-k.css';
import '../../css/k/k5es8f68i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jx7j-sbmy wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="da5rk30-k wm-k"/><path class="k5es8f68i wm-a"/></g>`,
		"fallback": "withicons:wallet-cards-blueprint",
	});
}

export default Component;
