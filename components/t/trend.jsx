import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/u/utf5_xbzs.css';
import '../../css/l/ljlrb_qkl.css';
import '../../css/g/g9tzrvvgs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="utf5_xbzs"/><path class="ljlrb_qkl"/><path class="g9tzrvvgs"/></g>`,
		"fallback": "icon-park:trend",
	});
}

export default Component;
