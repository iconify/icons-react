import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uf2l6lbxy.css';
import '../../css/e/e_gp3jbds.css';
import '../../css/p/pp76qbckp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uf2l6lbxy"/><path class="e_gp3jbds wm-shadow"/><path class="pp76qbckp"/></g>`,
		"fallback": "withicons:table-engrave",
	});
}

export default Component;
