import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uru29ue1u.css';
import '../../css/o/oml3ezfns.css';
import '../../css/e/e8-sr8bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uru29ue1u"/><path clip-rule="evenodd" class="oml3ezfns"/><path class="e8-sr8bzk"/></g>`,
		"fallback": "streamline-sharp-color:summit-flat",
	});
}

export default Component;
