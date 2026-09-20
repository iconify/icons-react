import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mr49ncf-u.css';
import '../../css/a/a_14debek.css';
import '../../css/j/jcpnr7wmn.css';
import '../../css/g/gf-op2b2p.css';
import '../../css/p/pw4_ixbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mr49ncf-u"/><path class="a_14debek"/><path class="jcpnr7wmn"/><path class="gf-op2b2p"/><path class="pw4_ixbiv"/></g>`,
		"fallback": "streamline-ultimate-color:paginate-filter-text",
	});
}

export default Component;
