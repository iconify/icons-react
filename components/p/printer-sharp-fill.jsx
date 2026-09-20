import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l5rtkhu7l.css';
import '../../css/k/k7cupbb5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l5rtkhu7l"/><path class="k7cupbb5u"/></g>`,
		"fallback": "keyline-icons:printer-sharp-fill",
	});
}

export default Component;
