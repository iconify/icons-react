import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngvwihb-o.css';
import '../../css/n/n54i3ab4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ngvwihb-o"/><path class="n54i3ab4o"/>`,
		"fallback": "mingcute:partly-cloud-night-fill",
	});
}

export default Component;
