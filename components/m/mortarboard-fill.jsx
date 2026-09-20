import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1cd53nrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1cd53nrv"/>`,
		"fallback": "mingcute:mortarboard-fill",
	});
}

export default Component;
