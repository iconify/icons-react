import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5vg2v04s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5vg2v04s"/>`,
		"fallback": "mingcute:safe-alert-fill",
	});
}

export default Component;
