import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4j5v5x8u.css';
import '../../css/r/r9uapkbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s4j5v5x8u"/><path clip-rule="evenodd" class="r9uapkbwi"/></g>`,
		"fallback": "streamline-sharp-color:ticket-star-flat",
	});
}

export default Component;
