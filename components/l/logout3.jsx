import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kvvxckbts.css';
import '../../css/g/gzz_f3boa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kvvxckbts"/><path clip-rule="evenodd" class="gzz_f3boa"/></g>`,
		"fallback": "reicon:logout3",
	});
}

export default Component;
