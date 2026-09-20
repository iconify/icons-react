import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/s/s-yinckvn.css';
import '../../css/f/flnna2b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="s-yinckvn"/><path class="flnna2b8j"/></g>`,
		"fallback": "keyline-icons:mail-open-sharp-fill",
	});
}

export default Component;
