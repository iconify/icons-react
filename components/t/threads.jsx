import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymxp5z6_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymxp5z6_m"/>`,
		"fallback": "mage:threads",
	});
}

export default Component;
