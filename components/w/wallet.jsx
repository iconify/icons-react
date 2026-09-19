import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjh0vcb-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjh0vcb-d"/>`,
		"fallback": "griddy-icons:wallet",
	});
}

export default Component;
