import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/phys5gjml.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/f/fz9wbhbib.css';
import '../../css/m/mktqs86uc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="phys5gjml wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="fz9wbhbib wm-k"/><path class="mktqs86uc wm-a"/></g>`,
		"fallback": "withicons:panel-left-open-blueprint",
	});
}

export default Component;
