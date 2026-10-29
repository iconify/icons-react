import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/y576glb9g.css';
import '../../css/a/ajdr2dz1w.css';
import '../../css/z/z30wqlwgo.css';
import '../../css/l/lskjy3bhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wm-k y576glb9g"/><path class="ajdr2dz1w wm-a"/><path class="wm-shadow z30wqlwgo"/><path class="lskjy3bhz wm-k"/></g>`,
		"fallback": "withicons:library-engrave",
	});
}

export default Component;
