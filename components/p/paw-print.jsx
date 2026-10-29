import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lphd9xrsu.css';
import '../../css/z/z1tuntb-b.css';
import '../../css/i/i58y1ybma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lphd9xrsu wm-k"/><path class="wm-a z1tuntb-b"/><path class="i58y1ybma wm-a"/>`,
		"fallback": "withicons-bauhaus:paw-print",
	});
}

export default Component;
