import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/c/cfwhifxgg.css';
import '../../css/v/vkvct9b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><circle class="cfwhifxgg"/><path class="vkvct9b9i"/></g>`,
		"fallback": "hugeicons:klarna",
	});
}

export default Component;
