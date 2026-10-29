import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/s5443tb7r.css';
import '../../css/x/xyui1mbhy.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/w/wb87fvbsu.css';
import '../../css/s/sqx3j0bau.css';
import '../../css/y/y8fe1tpsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="s5443tb7r wm-deco"/><path class="wm-deco xyui1mbhy"/><path class="cf3uzcrzx wm-deco"/><path class="wb87fvbsu wm-k"/><path class="sqx3j0bau wm-a"/><path class="wm-k y8fe1tpsx"/></g>`,
		"fallback": "withicons:package-blueprint",
	});
}

export default Component;
