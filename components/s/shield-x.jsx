import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k68w13ofn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k68w13ofn"/>`,
		"fallback": "noviair-light:shield-x",
	});
}

export default Component;
