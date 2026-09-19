import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/us_y-wb1m.css';
import '../../css/j/j6h40-zid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="us_y-wb1m"/><path class="j6h40-zid"/></g>`,
		"fallback": "heroicons-outline:qr-code",
	});
}

export default Component;
