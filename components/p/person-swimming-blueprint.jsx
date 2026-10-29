import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h25pg6j0l.css';
import '../../css/m/m-0p9pbqe.css';
import '../../css/m/mp_kcibzg.css';
import '../../css/c/cz_j_tbee.css';
import '../../css/z/z2ptcbzqu.css';
import '../../css/o/ofgm7hu0x.css';
import '../../css/g/grdm47b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="h25pg6j0l wm-deco"/><path class="m-0p9pbqe wm-deco"/><path class="mp_kcibzg wm-deco"/><path class="cz_j_tbee wm-k"/><path class="wm-a z2ptcbzqu"/><path class="ofgm7hu0x wm-k"/><path class="grdm47b9i wm-a"/></g>`,
		"fallback": "withicons:person-swimming-blueprint",
	});
}

export default Component;
