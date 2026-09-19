import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/websu8mzr.css';
import '../../css/g/gvhvembir.css';
import '../../css/i/il81idb_r.css';
import '../../css/d/d8hev-bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="websu8mzr"/><path class="gvhvembir"/><path class="il81idb_r"/><path class="d8hev-bwn"/></g>`,
		"fallback": "hugeicons:maps-circle-02",
	});
}

export default Component;
