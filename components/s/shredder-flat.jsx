import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d689v_84c.css';
import '../../css/x/xnrf-gbpk.css';
import '../../css/d/dm7ua-bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d689v_84c"/><path clip-rule="evenodd" class="xnrf-gbpk"/><path clip-rule="evenodd" class="dm7ua-bpz"/></g>`,
		"fallback": "streamline-sharp-color:shredder-flat",
	});
}

export default Component;
