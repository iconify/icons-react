import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/s-mvv4btw.css';
import '../../css/n/n20vj1dws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="s-mvv4btw"/><path class="n20vj1dws"/></g>`,
		"fallback": "hugeicons:reset-password",
	});
}

export default Component;
