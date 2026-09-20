import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soe3d3biv.css';
import '../../css/o/ouvk3bb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soe3d3biv"/><path class="ouvk3bb1u"/>`,
		"fallback": "mingcute:nintendo-switch-line",
	});
}

export default Component;
