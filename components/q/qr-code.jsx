import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ili7mtm7o.css';
import '../../css/c/cvrw8fbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ili7mtm7o"/><path class="cvrw8fbur"/></g>`,
		"fallback": "heroicons:qr-code",
	});
}

export default Component;
