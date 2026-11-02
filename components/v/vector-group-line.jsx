import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxl43mf-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxl43mf-v"/>`,
		"fallback": "mingcute:vector-group-line",
	});
}

export default Component;
