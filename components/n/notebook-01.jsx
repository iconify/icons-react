import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kbip3tbng.css';
import '../../css/b/bc8oa9bat.css';
import '../../css/i/ixmn_u5zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kbip3tbng"/><path class="bc8oa9bat"/><path class="ixmn_u5zn"/></g>`,
		"fallback": "hugeicons:notebook-01",
	});
}

export default Component;
