import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d4j2ijbuc.css';
import '../../css/t/trtjyubka.css';
import '../../css/z/zldhw_b3o.css';
import '../../css/z/ztcla3blq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d4j2ijbuc"/><circle class="trtjyubka"/><circle class="zldhw_b3o"/><path class="ztcla3blq"/></g>`,
		"fallback": "hugeicons:trolley-01",
	});
}

export default Component;
