import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ycpx6cc1w.css';
import '../../css/d/dpom0hb5y.css';
import '../../css/p/pbm76tdaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ycpx6cc1w"/><path class="dpom0hb5y"/><path class="pbm76tdaz"/></g>`,
		"fallback": "hugeicons:video-ai",
	});
}

export default Component;
