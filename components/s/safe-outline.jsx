import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vl_s_18va.css';
import '../../css/y/yjdfoebcl.css';
import '../../css/s/sakyh1b-e.css';
import '../../css/l/lf940mbnz.css';
import '../../css/r/rb7olndjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect class="vl_s_18va"/><rect class="yjdfoebcl"/><path class="sakyh1b-e"/><circle class="lf940mbnz"/><path class="rb7olndjf"/></g>`,
		"fallback": "bitcoin-icons:safe-outline",
	});
}

export default Component;
