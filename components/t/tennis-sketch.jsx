import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vt19b-b7a.css';
import '../../css/x/xm1qpqbof.css';
import '../../css/d/d2omlvbzu.css';
import '../../css/e/eqcaaebyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vt19b-b7a wm-k"/><path class="wm-a xm1qpqbof"/><path class="d2omlvbzu wm-k"/><path class="eqcaaebyw wm-a"/></g>`,
		"fallback": "withicons:tennis-sketch",
	});
}

export default Component;
