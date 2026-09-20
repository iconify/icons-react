import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pi8bn8bkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pi8bn8bkx"/>`,
		"fallback": "uil:solid",
	});
}

export default Component;
