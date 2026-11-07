import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_vxd5bvs.css';
import '../../css/p/p0dd6dbol.css';
import '../../css/y/y__cacvha.css';
import '../../css/q/q4fxlaccz.css';
import '../../css/k/k0lwqxbvz.css';
import '../../css/z/zozkijhek.css';
import '../../css/s/s48_u__dx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_vxd5bvs"/><path class="p0dd6dbol"/><path class="y__cacvha"/><path class="q4fxlaccz"/><path class="k0lwqxbvz"/><path class="zozkijhek"/><path class="s48_u__dx"/>`,
		"fallback": "solar:sheet-bold",
	});
}

export default Component;
