import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l992fn8dq.css';
import '../../css/v/vcqc0q5py.css';
import '../../css/s/s5vsshbss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l992fn8dq"/><path class="vcqc0q5py"/><path class="s5vsshbss"/></g>`,
		"fallback": "reicon:pin-off",
	});
}

export default Component;
