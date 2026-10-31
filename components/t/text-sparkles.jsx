import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sio63qb3e.css';
import '../../css/g/gz4rmvf3e.css';
import '../../css/c/ciui2qe_b.css';
import '../../css/z/zif4qpbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sio63qb3e wm-s"/><path class="gz4rmvf3e wm-k"/><path class="ciui2qe_b wm-s"/><path class="wm-deco zif4qpbus"/></g>`,
		"fallback": "withicons-kawaii:text-sparkles",
	});
}

export default Component;
