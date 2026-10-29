import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h90u2503u.css';
import '../../css/x/xyui1mbhy.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/q/q01kz0ugr.css';
import '../../css/v/v-dzpkwlt.css';
import '../../css/s/szzmfoboo.css';
import '../../css/h/heib1vo1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="h90u2503u wm-deco"/><path class="wm-deco xyui1mbhy"/><path class="cf3uzcrzx wm-deco"/><path class="q01kz0ugr wm-k"/><path class="v-dzpkwlt wm-a"/><path class="szzmfoboo wm-s"/><path class="heib1vo1o wm-k"/></g>`,
		"fallback": "withicons:package-plus-blueprint",
	});
}

export default Component;
