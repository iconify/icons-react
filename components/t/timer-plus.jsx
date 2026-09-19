import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbgip-g1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lbgip-g1d"/>`,
		"fallback": "griddy-icons:timer-plus",
	});
}

export default Component;
