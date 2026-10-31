import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhlh_3dmr.css';
import '../../css/l/lwormdb5a.css';
import '../../css/d/da9z37dud.css';
import '../../css/g/gmuv37iej.css';
import '../../css/w/w-g90acvs.css';
import '../../css/l/lk_ayzbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nhlh_3dmr wm-k"/><path class="lwormdb5a wm-deco"/><path class="da9z37dud wm-k"/><path class="gmuv37iej wm-shadow"/><path class="w-g90acvs wm-shine"/><path class="lk_ayzbwr wm-shine"/></g>`,
		"fallback": "withicons-valentine:stop",
	});
}

export default Component;
