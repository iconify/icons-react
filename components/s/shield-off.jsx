import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6cpaxbsh.css';
import '../../css/d/d__bzkg1g.css';
import '../../css/d/d1h_tjbji.css';
import '../../css/z/z7ko-ob_g.css';
import '../../css/w/w7symbbwo.css';
import '../../css/y/y--coj5rv.css';
import '../../css/k/k59g_fbsi.css';
import '../../css/r/rowl2lbzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6cpaxbsh wm-shadow"/><path class="d__bzkg1g wm-k"/><path class="d1h_tjbji wm-k"/><path class="wm-k z7ko-ob_g"/><path class="w7symbbwo wm-k"/><path class="wm-k y--coj5rv"/><path class="k59g_fbsi wm-shine"/><path class="rowl2lbzx wm-s"/>`,
		"fallback": "withicons-pastel:shield-off",
	});
}

export default Component;
