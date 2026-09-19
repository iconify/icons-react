import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdrf14ebl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdrf14ebl"/>`,
		"fallback": "boxicons:skip-next",
	});
}

export default Component;
