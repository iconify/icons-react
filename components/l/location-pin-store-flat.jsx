import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u36qp-bwo.css';
import '../../css/q/qjtvh9brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u36qp-bwo"/><path clip-rule="evenodd" class="qjtvh9brw"/></g>`,
		"fallback": "streamline-sharp-color:location-pin-store-flat",
	});
}

export default Component;
