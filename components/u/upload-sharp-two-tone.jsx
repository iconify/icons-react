import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rwjzogb5q.css';
import '../../css/p/p3xqt9u1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rwjzogb5q"/><path class="p3xqt9u1y"/></g>`,
		"fallback": "keyline-icons:upload-sharp-two-tone",
	});
}

export default Component;
