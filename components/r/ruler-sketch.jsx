import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/on45fbcsd.css';
import '../../css/j/jwcc8uoss.css';
import '../../css/r/rstq11b5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="on45fbcsd"/><path class="jwcc8uoss wm-k"/><path class="rstq11b5k wm-a"/></g>`,
		"fallback": "withicons:ruler-sketch",
	});
}

export default Component;
