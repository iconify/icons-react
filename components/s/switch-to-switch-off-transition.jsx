import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g36zgr.css';
import '../../css/m/mux-7n.css';
import '../../css/c/cx-from-17px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g36zgr"/><circle class="mux-7n"/>`,
		"fallback": "line-md:switch-to-switch-off-transition",
	});
}

export default Component;
