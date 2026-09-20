import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2bcx3mob.css';
import '../../css/e/efw24oblo.css';
import '../../css/r/r29q0j4dc.css';
import '../../css/u/uukhb0tao.css';
import '../../css/g/gna-ztm3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q2bcx3mob"/><path class="efw24oblo"/><path class="r29q0j4dc"/><path class="uukhb0tao"/><path class="gna-ztm3m"/>`,
		"fallback": "token:susd",
	});
}

export default Component;
