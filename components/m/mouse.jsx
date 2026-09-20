import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vv6z0bc8u.css';
import '../../css/i/iup9trbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="vv6z0bc8u"/><path class="iup9trbmr"/></g>`,
		"fallback": "lucide:mouse",
	});
}

export default Component;
