import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hko6ldm5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hko6ldm5r"/>`,
		"fallback": "mingcute:left-fill",
	});
}

export default Component;
