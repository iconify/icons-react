import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z6m9-r_nv.css';
import '../../css/i/i0r75dn8b.css';
import '../../css/v/v9vh-fd4s.css';
import '../../css/w/w5jtgj_4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco z6m9-r_nv"/><path class="i0r75dn8b wm-k"/><path class="v9vh-fd4s wm-a"/><path class="w5jtgj_4y wm-k"/></g>`,
		"fallback": "withicons:paintbrush-blueprint",
	});
}

export default Component;
