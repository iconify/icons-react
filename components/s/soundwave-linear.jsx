import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jy2u6qbys.css';
import '../../css/s/smb-jnhdg.css';
import '../../css/f/fzqccolbq.css';
import '../../css/p/pz2mgtkjp.css';
import '../../css/k/k2-30wbbi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jy2u6qbys"/><path class="smb-jnhdg"/><path class="fzqccolbq"/><path class="pz2mgtkjp"/><path class="k2-30wbbi"/></g>`,
		"fallback": "solar:soundwave-linear",
	});
}

export default Component;
