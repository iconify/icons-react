import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vn3pz2urw.css';
import '../../css/l/lwtndu7mg.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/y/yaeqedwkp.css';
import '../../css/b/bjhx8wydq.css';
import '../../css/r/riz3aabkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vn3pz2urw wm-deco"/><path class="lwtndu7mg wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="wm-k yaeqedwkp"/><path class="bjhx8wydq wm-a"/><path class="riz3aabkw wm-k"/></g>`,
		"fallback": "withicons:stroller-blueprint",
	});
}

export default Component;
