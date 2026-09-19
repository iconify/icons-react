import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/x/xhdah4bbl.css';
import '../../css/o/ouk324llz.css';
import '../../css/y/yfm2a_b8o.css';
import '../../css/l/lkfh1obyo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="xhdah4bbl"/><path class="ouk324llz"/><path class="yfm2a_b8o"/><path class="lkfh1obyo"/></g>`,
		"fallback": "icon-park:right-bar",
	});
}

export default Component;
