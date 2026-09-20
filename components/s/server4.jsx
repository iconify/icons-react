import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vuq5xib1m.css';
import '../../css/r/rwnmfif_h.css';
import '../../css/s/soj9s81os.css';
import '../../css/u/uggp82-bd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vuq5xib1m"/><path clip-rule="evenodd" class="rwnmfif_h"/><path class="soj9s81os"/><path clip-rule="evenodd" class="uggp82-bd"/></g>`,
		"fallback": "reicon:server4",
	});
}

export default Component;
