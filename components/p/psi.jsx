import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yq9f-6ovd.css';
import '../../css/x/x_vluwbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="yq9f-6ovd"/><path class="x_vluwbrr"/></g>`,
		"fallback": "matita:psi",
	});
}

export default Component;
