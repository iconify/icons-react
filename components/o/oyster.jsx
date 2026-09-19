import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmc0o5h_o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmc0o5h_o"/>`,
		"fallback": "game-icons:oyster",
	});
}

export default Component;
