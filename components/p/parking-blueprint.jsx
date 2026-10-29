import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cp_lsid_t.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/s/so7639bqv.css';
import '../../css/m/m6ku3cbcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="cp_lsid_t wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="so7639bqv wm-k"/><path class="m6ku3cbcx wm-a"/></g>`,
		"fallback": "withicons:parking-blueprint",
	});
}

export default Component;
