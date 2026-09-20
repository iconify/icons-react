import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pumb42b6l.css';
import '../../css/y/yl3hz14bt.css';
import '../../css/x/xmntywhuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pumb42b6l"/><circle class="yl3hz14bt"/><path class="xmntywhuu"/></g>`,
		"fallback": "proicons:photo-multiple",
	});
}

export default Component;
