import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf7uh1sir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf7uh1sir"/>`,
		"fallback": "iconoir:sea-and-sun",
	});
}

export default Component;
