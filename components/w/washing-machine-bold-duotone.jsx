import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bxlizccri.css';
import '../../css/d/dvt0gg15f.css';
import '../../css/p/pay_c_brr.css';
import '../../css/u/uq9m_eh_g.css';
import '../../css/c/csm45sbln.css';
import '../../css/f/fr8_t4_lj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bxlizccri"/><path clip-rule="evenodd" class="dvt0gg15f"/><path class="pay_c_brr"/><path class="uq9m_eh_g"/><path class="csm45sbln"/><path class="fr8_t4_lj"/></g>`,
		"fallback": "solar:washing-machine-bold-duotone",
	});
}

export default Component;
