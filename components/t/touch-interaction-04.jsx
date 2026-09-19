import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pz2-90rpl.css';
import '../../css/p/pf__zzs_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pz2-90rpl"/><path class="pf__zzs_f"/></g>`,
		"fallback": "hugeicons:touch-interaction-04",
	});
}

export default Component;
