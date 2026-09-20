import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxc6n7fcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxc6n7fcr"/>`,
		"fallback": "uil:user-check",
	});
}

export default Component;
