import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v5zhtkbbw.css';
import '../../css/e/eh4vwp2pz.css';
import '../../css/b/baq_7_bee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="v5zhtkbbw wm-shadow"/><path class="eh4vwp2pz wm-shadow"/><path class="baq_7_bee"/></g>`,
		"fallback": "withicons-brutal:person-running",
	});
}

export default Component;
