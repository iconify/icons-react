import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxeo2gbab.css';
import '../../css/q/q8921-8vp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxeo2gbab"/><path class="q8921-8vp"/>`,
		"fallback": "mingcute:meh-line",
	});
}

export default Component;
