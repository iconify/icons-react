import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp06xm10d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qp06xm10d"/>`,
		"fallback": "token:sdex",
	});
}

export default Component;
