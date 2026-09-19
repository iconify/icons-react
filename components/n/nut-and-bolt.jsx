import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oozhcpbni.css';
import '../../css/z/zx8n-dogi.css';
import '../../css/o/oqrh_xb1i.css';
import '../../css/s/syt-j3q9e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oozhcpbni"/><path class="zx8n-dogi"/><path class="oqrh_xb1i"/><path class="syt-j3q9e"/></g>`,
		"fallback": "fluent-emoji-flat:nut-and-bolt",
	});
}

export default Component;
